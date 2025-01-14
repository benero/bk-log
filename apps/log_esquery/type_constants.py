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

from typing import List, Dict, Any, Tuple, Union

type_index_set_string = str
type_index_set_list = List[str]
type_scenario_id = str
type_start_time = str
type_end_time = str
type_time_range = str
type_keyword = str
type_ips = str
type_host_scopes = Dict[str, Any]
type_a_addition = Dict[str, Any]
type_addition = List[type_a_addition]
type_begin = int
type_size = int
type_search_dict = Dict[str, Any]
type_time_range_dict = Dict[str, Any]
type_sort_tuple = Union[List[str], Tuple[str, str]]
type_sort_multi_list = List[type_sort_tuple]
type_sort_dict = Dict[str, Dict[str, str]]
type_sort_multi_dict_list = List[type_sort_dict]
type_mapping_dict = Dict[str, Any]
