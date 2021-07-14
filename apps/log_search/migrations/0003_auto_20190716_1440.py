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
# Generated by Django 1.11.2 on 2019-07-16 06:40
from __future__ import unicode_literals

import apps.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("log_search", "0002_bklog_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="monitornoticeconfig",
            name="notice_eewechat",
        ),
        migrations.RemoveField(
            model_name="monitornoticeconfig",
            name="notice_mail",
        ),
        migrations.RemoveField(
            model_name="monitornoticeconfig",
            name="notice_sms",
        ),
        migrations.RemoveField(
            model_name="monitornoticeconfig",
            name="notice_wechat",
        ),
        migrations.AddField(
            model_name="monitornoticeconfig",
            name="notice_type",
            field=apps.models.MultiStrSplitByCommaField(default=None, max_length=255, null=True, verbose_name="通知方式"),
        ),
    ]
