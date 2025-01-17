# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making BK-LOG 蓝鲸日志平台 available.
Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
BK-LOG 蓝鲸日志平台 is licensed under the MIT License.
License for BK-LOG 蓝鲸日志平台:
--------------------------------------------------------------------
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"""
from collections import defaultdict
from django.utils.translation import ugettext as _
from django.db.models import Count

from apps.log_measure.utils.metric import MetricUtils
from bk_monitor.constants import TimeFilterEnum
from bk_monitor.utils.metric import register_metric, Metric


class LogExtractMetricCollector(object):
    @staticmethod
    @register_metric(
        "log_extract_strategy", description=_("日志提取策略"), data_name="metric", time_filter=TimeFilterEnum.MINUTE5
    )
    def log_extract_strategy():
        from apps.log_extract.models import Strategies

        groups = Strategies.objects.all().values("bk_biz_id").order_by().annotate(count=Count("strategy_id"))

        metrics = [
            Metric(
                metric_name="count",
                metric_value=group["count"],
                dimensions={
                    "target_bk_biz_id": group["bk_biz_id"],
                    "target_bk_biz_name": MetricUtils.get_instance().get_biz_name(group["bk_biz_id"]),
                },
                timestamp=MetricUtils.get_instance().report_ts,
            )
            for group in groups
        ]

        return metrics

    @staticmethod
    @register_metric(
        "log_extract_task", description=_("日志提取任务"), data_name="metric", time_filter=TimeFilterEnum.MINUTE5
    )
    def log_extract_task():
        from apps.log_extract.models import Tasks

        groups = Tasks.objects.all().values("bk_biz_id", "created_by").order_by().annotate(count=Count("task_id"))

        # 每个业务的任务数
        biz_count_groups = defaultdict(int)

        # 每个业务的用户数
        user_count_groups = defaultdict(int)

        for group in groups:
            biz_count_groups[group["bk_biz_id"]] += group["count"]
            user_count_groups[group["bk_biz_id"]] += 1

        metrics = [
            Metric(
                metric_name="count",
                metric_value=count,
                dimensions={
                    "target_bk_biz_id": bk_biz_id,
                    "target_bk_biz_name": MetricUtils.get_instance().get_biz_name(bk_biz_id),
                },
                timestamp=MetricUtils.get_instance().report_ts,
            )
            for bk_biz_id, count in biz_count_groups.items()
        ]

        metrics += [
            Metric(
                metric_name="user_count",
                metric_value=count,
                dimensions={
                    "target_bk_biz_id": bk_biz_id,
                    "target_bk_biz_name": MetricUtils.get_instance().get_biz_name(bk_biz_id),
                },
                timestamp=MetricUtils.get_instance().report_ts,
            )
            for bk_biz_id, count in user_count_groups.items()
        ]

        return metrics
