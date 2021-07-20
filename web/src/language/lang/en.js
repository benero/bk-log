/*
 * Tencent is pleased to support the open source community by making BK-LOG 蓝鲸日志平台 available.
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 * BK-LOG 蓝鲸日志平台 is licensed under the MIT License.
 *
 * License for BK-LOG 蓝鲸日志平台:
 * --------------------------------------------------------------------
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 */

/**
 * 英文语言包
 */
export default {
  common: {
    yes: 'Yes',
    no: 'No',
    configSuccessfully: 'Config successfully',
    createdSuccessfully: 'Created successfully',
  },
  field: {
    configDisplayAndSort: 'Config display and sort',
    displayFieldsHaveSelected: 'Displayed fields（selected ',
    otherFields: 'Other fields',
  },
  btn: {
    select: 'Select',
    search: 'Search',
    save: 'Save',
    add: 'Add',
    affirm: 'OK',
    confirm: 'Confirm',
    cancel: 'Cancel',
    newBtn: 'New',
    edit: 'Edit',
    delete: 'Delete',
    vacancy: 'No Data',
    close: 'Close',
    export: 'Export',
    backToTop: 'TOP',
    filter: 'Filter',
    clearScreen: 'Clear',
    submit: 'Submit',
    searchname: 'Please search name',
    copy: 'Copy',
    Field: 'Field Format',
    block: 'Disable',
    start: 'Enable',
    timeFormatTips: 'datetime format',
  },
  form: {
    pleaseEnter: 'Please enter',
    alarmType: 'Please select the type of alarm',
    enterCharacters_255: 'Please enter within 255 characters',
    noMoreThan_50: 'No more than 50 characters',
    must: 'Required',
    collectSearch: 'source name / address / creator',
    pleaseEnterQQ: 'Please enter QQ and press Enter to end',
    target: 'Collection target cannot be empty',
    No_characters: 'No less than 5 characters',
    Only_entered: 'only english, numbers or underscores',
    searchAll: 'source name / address / creator',
  },
  // 检索页
  日志检索: 'Log Retrieve',
  指标检索: 'Index Retrieve',
  数据查询: 'Data Query',
  是否开启自动查询: 'Whether to open auto query',
  知道了: 'Got it',
  已收藏查询: 'Favorited query',
  索引集: 'Index Set',
  查询语句: 'Query Statement',
  可输入SQL语句进行快速查询: 'You can enter SQL statements for quick query.',
  查看语法: 'View grammar',
  精确匹配: 'Exact match (support AND, OR):',
  字段名匹配: 'Field name matching (* stands for wildcard):',
  字段名模糊匹配: 'Field name fuzzy matching:',
  通配符匹配: 'Wildcard matching:',
  正则匹配: 'Regular match:',
  范围匹配: 'Range match:',
  过滤条件: 'Filter Condition',
  个模块: ' module(s) selected',
  个IP: ' ip(s) selected',
  查询: 'Query',
  保存查询: 'Save Query',
  清空: 'Clear',
  查询历史: 'Query History',
  没有找到该记录下相关索引集: 'The relevant index set under this record was not found',
  关闭: 'Off',
  请输入完整的过滤条件: 'Please enter the complete filter condition.',
  添加条件: 'Add condition',
  添加IP: 'Add IP',
  '收藏描述：': 'Favorite description:',
  '保存成功，可前往查询历史查看': 'Saved successfully. You can go to "Query History" to view.',
  点击重新展开: 'Click to expand',
  请输入内容: 'Please enter content',
  检索: 'Retrieve',
  复制: 'Copy',
  暂无数据: 'Empty Data',
  总趋势: 'General Trend',
  // 日志提取
  日志提取: 'Log Extract',
  创建: 'Create',
  新建: 'Create',
  新增: 'Create',
  下载: 'Download',
  下载目标: 'Download target',
  重新下载: 'Duplicate',
  文件: 'File',
  文件名: 'Filename',
  文件列表: 'File List',
  文件路径: 'File Path',
  步骤: 'Step',
  开始时间: 'Start Time',
  耗时: 'Time Consuming(s)',
  执行情况: 'Run Status',
  文件日期: 'File date',
  创建时间: 'Created time',
  创建人: 'Creator',
  任务状态: 'Task status',
  操作: 'Operation',
  详情: 'Detail',
  输入关键字搜索: 'Enter keyword to search',
  暂无选项: 'No options',
  选择服务器: 'Choose Server',
  已选择: 'Has selected',
  个节点: 'IP node(s)',
  目录或文件名: 'Dir/filename',
  选择离你最近的提取链路: 'Choose the extraction link closest to you',
  查询目录提示: 'Query the contents of the specified directory if this directory ends with "/". Otherwise, query all files in this directory and its subdirectories by default.',
  预览地址: 'Preview address',
  文本过滤: 'Text filtering',
  提交下载任务: 'Submit',
  确认: 'Confirm',
  取消: 'Cancel',
  复制IP: 'Copy IP',
  清空IP: 'Clear IP',
  复制成功: 'Copy successfully',
  共: 'Total',
  台: 'node(s)',
  成功: 'Success',
  正常: 'Normal',
  失败: 'Failed',
  Agent未安装: 'Agent not installed',
  是否搜索子目录: 'Whether to search subdirectories',
  搜索: 'Search',
  从下载目标中选择预览目标: 'Select the preview target from the download target(only show the last 500 matching files), used to find the server file, the final execution is still subject to the download target',
  最后修改时间: 'Last modified',
  近一天: 'Nearly a day',
  近一周: 'Nearly a week',
  近一月: 'Nearly a month',
  所有: 'All time',
  多个关键字用英文逗号: 'Separate multiple keywords with commas',
  关键字过滤: 'Keyword filtering',
  关键字范围: 'Keyword range',
  最新行数: 'Latest number of rows',
  按行过滤: 'Filter by row',
  从匹配: 'Match from',
  开始到匹配: 'to',
  之间的所有行: 'range',
  请输入整数: 'Please enter an integer',
  从第: 'From',
  行到第: 'to',
  行: 'row',
  用户组: 'Name',
  授权目标: 'Authorization target',
  文件目录: 'File directory',
  文件后缀: 'File extension',
  文件后缀提示: 'The suffix name can not begin with dot symbol',
  编辑: 'Edit',
  删除: 'Delete',
  确定要删除: 'Sure to delete',
  删除成功: 'Deleted successfully',
  创建成功: 'Created successfully',
  修改成功: 'Modified successfully',
  不同类别的授权用户: 'Different types of authorized users are distinguished by user group name, which is unique under a single service',
  用户列表: 'User list',
  授权目录: 'Authorized directory',
  授权目录提示: 'Directory should end with "/". Windows server should start with "/cygdrive/"',
  选择目标: 'Select target',
  按大区选择: 'Select by region',
  按模块选择: 'Select by module',
  全选: 'Select all',
  执行人: 'Operator',
  执行人提示: 'Global settings. Job transmission is required during downloading. It will be carried out as the executor. Please ensure that the executor has business authority',
  改为我: 'Change to me',
  克隆: 'Clone',
  或: 'or',
  与: 'and',
  非: 'not',
  关键字匹配模式: 'Keyword match mode',
  备注: 'Remark',
  '搜索文件名、创建人，按 enter 键搜索': 'Search file name, creator，Press enter to search',
  下载链接: 'Download link',
  点击获取: 'Click to get',
  已复制到剪切板: 'Copied to clipboard',
  '链接可重复获取，每个链接只能下载一次。': 'The link can be obtained repeatedly, and each link can only be downloaded once.',
  问题反馈: 'Feedback',
  链路配置: 'Link Configuration',
  上报链路配置: 'Report link configuration',
  上报链路: 'Report link',
  新建链路配置: 'Create Link Configuration',
  编辑链路配置: 'Edit Link Configuration',
  链路名称: 'Link Name',
  允许的业务: 'Allowed Biz',
  链路信息: 'Link Information',
  是否启用: 'Is Active',
  ES集群: 'ES Cluster',
  必填项: 'Required',
  全部业务: 'All biz',
  是: 'Yes',
  否: 'No',
  字段过滤: 'Field Filter',
  可聚合: 'Polymerizable',
  不限: 'Unlimited',
  字段类型: 'Field Type',
  字段类型过滤: 'Field Type Filter',
  搜索字段名: 'Search filed name',
  已添加字段: 'Visible Fields',
  可选字段: 'Available Fields',
  显示别名: 'Show field alias',
  隐藏: 'Hide',
  显示: 'Show',
  '条记录中数量排名前 5 的数据值': ' records(top 5 value)',
  数字: 'Number',
  字符串: 'Keyword',
  文本: 'Text',
  时间: 'Date',
  确定: 'Confirm',
  提取链路: 'Extract Link',
  新建提取链路: 'Create Extract Link',
  链路类型: 'Link type',
  执行bk_biz_id: 'op_bk_biz_id',
  腾讯云SecretId: 'qcloud_secret_id',
  腾讯云SecretKey: 'qcloud_secret_key',
  腾讯云Cos桶名称: 'qcloud_cos_bucket',
  腾讯云Cos区域: 'qcloud_cos_region',
  链路中转机: 'Link Hosts',
  中转机: 'Hosts',
  挂载目录: 'Target Directory',
  主机云区域ID: 'Cloud ID',
  主机IP: 'IP',
  添加链路中转机: 'Add link host',
  内网链路: 'Intranet Kink',
  腾讯云链路: 'QCloud Link',
  接入前请查看: 'Please browse',
  接入指引: 'access guidelines',
  '，尤其是在日志量大的情况下请务必提前沟通。': 'before join. Especially in the case of a large amount of logs, please communicate in advance',
  筛选包含: 'Filter results that contain ',
  的结果: '',
  等于: 'equals',
  某一值: ' some value',
  存在: 'exists',
  任意形式: ' in any form',
  需要: 'Requires ',
  两个参数都: 'both arguments',
  为真: ' to be true',
  一个或多个参数: 'one or more arguments',
  收藏: 'Favorites',
  未收藏: 'Not Favorites',
  历史记录: 'Search History',
  nav: {
    logRetrieve: 'Log Search',
    retrieve: 'Search',
    dashboard: 'Dashboard',
    extract: 'Log Extract',
    extractManage: 'Log Extract Config',
    monitors: 'Monitoring Strategy',
    alarmStrategy: 'Alarm Rules',
    addstrategy: 'New',
    editstrategy: 'Edit',
    alarmLog: 'Record',
    shieldStrategy: 'Mute Rules',
    manage: 'Management',
    indexSet: 'Indices',
    addIndexSet: 'New',
    addIndexTips1: 'Log from Data-System or ES',
    addIndexTips2: 'related data',
    editIndexSet: 'Edit',
    dataSource: 'Data source',
    collectAccess: 'Collector',
    addCollectAccess: 'New',
    addCollectTips1: 'Log data is still on the server',
    addCollectTips2: 'Please create a collection task first if you need to collect logs, ',
    esAccess: 'ES Source',
    permissionGroup: 'User Group Config',
    v3Migrate: 'V3 Migrate',
    notIndex: 'No data',
    notIndexAuth: 'Please contact the operator to set Indices',
    versionLog: 'Change Log',
    docCenter: 'Documents',
    New_acquisition: 'New',
    Edit_collection: 'Edit',
    Enable_collections: 'Enable',
    Disable_collection: 'Disable',
    Field_extraction: 'Format',
    Configuration_details: 'Details',
    Data_sampling: 'Data sample',
    language: 'Language',
  },
  数据接入: 'Data source',
  索引集管理: 'Indices',
  用户组配置: 'User Group Config',
  v3迁移: 'V3 Migrate',
  日志提取配置: 'Log Extract Config',
  仪表盘: 'Dashboard',
  采集项: 'Collection',
  新建采集项: 'Create Collection',
  管理: 'Manage',
  基本信息: 'Basic Info',
  采集状态: 'Collection Status',
  数据存储: 'Data Storage',
  数据状态: 'Data Status',
  使用详情: 'Usage Details',
  部署详情: 'Deployment Details',
  集群名称: 'Cluster Name',
  索引集名称: 'Index Set Name',
  基础信息: 'Basic Information',
  分裂规则: 'Split Rule',
  物理索引: 'Physical Index',
  字段信息: 'Field Information',
  数据趋势: 'Data Trend',
  分钟数据量: 'Minute data volume',
  日数据量: 'Daily data volume',
  数据量: 'Data volume',
  使用统计: 'Usage statistics',
  检索记录: 'Retrieve records',
  使用次数趋势: 'Usage trend',
  用户使用频次: 'User frequency',
  检索耗时统计: 'Retrieval time-consuming',
  '耗时优化指引 >': 'Optimization guidelines >',
  占比: 'Proportion',
  '耗时(s)': 'Time consuming(s)',
  刷新: 'Refresh',
  近x天: 'Last {x} days',
  数据采样: 'Data Sampling',
  新建索引集: 'Create Index Set',
  编辑索引集: 'Edit Index Set',
  集群名: 'Cluster name',
  状态: 'Status',
  集群: 'Cluster',
  查看权限: 'View permission',
  数据分类: 'Data category',
  新增采集: 'Add collection',
  已选索引: 'Selected index',
  新增索引: 'Add index',
  索引: 'Index',
  添加: 'Add',
  字段: 'Field name',
  类型: 'Field type',
  分词: 'Participle',
  字段名: 'Field name',
  中文名: 'Field alias',
  数据类型: 'Field type',
  序号: 'Serial number',
  中文名称: 'Chinese name',
  匹配结果: 'Match result',
  MUST类型的字段缺失: 'MUST type field is missing',
  请选择集群: 'Please selected cluster',
  请选择索引: 'Please selected index',
  成功匹配x条索引: 'Successfully matched 2 index(es)',
  时间字段: 'Time field',
  时间字段需要保持一致: 'The time field needs to be consistent',
  时间格式: 'Time unit',
  所属集群: 'Cluster',
  数据源: 'Data source',
  确认删除索引: 'Confirm to delete',
  主分片: 'Primary shard',
  副本分片: 'Replica shards',
  文档计算: 'Document calculation',
  文档计数: 'Document count',
  运行状态: 'Operating status',
  '存储大小(M)': 'Storage size(M)',
  操作记录: 'Operation records',
  操作日期: 'Operation date',
  操作人: 'Operator',
  操作内容: 'Operation content',
  操作结果: 'Operation result',
  新建仪表盘: 'Create Dashboard',
  新建目录: 'Create Category',
  导入仪表盘: 'Import Dashboard',
  retrieve: {
    time_zone: 'Time zone',
    node: 'Node',
    Please_left: 'Please select host / node  on the left',
    Dynamic_grouping: 'Dynamic grouping',
    Business: 'Topology',
    IP_input: 'Manual IP',
    Multiple_carriage: 'Multiple IPs are separated by a carriage return',
    host_abnormal: 'host agents are abnormal',
    Existing_host: 'Existing host',
    Nothing_selected: 'Nothing selected',
    Please_enter: 'Please enter IP',
    frequency: 'Auto refresh',
    each10s: 'Every 10 seconds',
    each30s: 'Every 30 seconds',
    each2m: 'Every 2 minutes',
    each5m: 'Every 5 minutes',
    each10m: 'Every 10 minutes',
    ipSelect: 'IP quick selection',
    moduleNum: ' modules',
    ipNum: 'IPs',
    addFilter: 'Add Filter',
    operatorPlaceholder: 'multiple values ​​with commas',
    period_5S: 'Last 5S',
    period_5Min: 'Last 5Min',
    period_15Min: 'Last 15Min',
    period_30Min: 'Last 30Min',
    period_1H: 'Last 1H',
    period_4H: 'Last 4H',
    period_12H: 'Last 12H',
    period_1D: 'Last 1D',
    result1: 'Search results (find ',
    result2: ' rows, spent ',
    ms: 'ms)',
    result3: ', add ',
    result4: ' monitor',
    dataLoading: 'Loading...',
    operate: 'Operations',
    log: 'Tail',
    realTimeLog: 'Real-time',
    realTimeScrollingLog: 'Real-time',
    filterPlaceholder: 'Enter keywords to filter',
    copySuccess: 'Copy Success',
    context: 'Context',
    monitorAlarm: 'Monitor Alarm',
    showMore: 'Show 2,000 results, if you want to see more, please optimize the query conditions',
    setField: 'Setting',
    exportFailed: 'Export Failed',
    partialExport: 'Partial Export',
    // dataMoreThan: 'Over 10,000 data, only download the latest 10,000 data',
    dataMoreThan: 'More than 10,000 current data',
    dataMoreThanMillion: 'More than 1 million current data',
    moreThanMillionDesc: 'Please narrow down the data range before downloading the package, or download the first 10,000 pieces of data directly',
    reasonFor: 'Due to',
    reasonDesc: 'Asynchronous download is not possible, the first 10,000 pieces of data can be downloaded directly',
    immediateExport: 'OK',
    immediateExportDesc: 'Only download the latest 10,000 data',
    asyncExport: 'ASYNC',
    asyncExportDesc: 'Async download can download all data in a package, please pay attention to check the download notification',
    asyncExportSuccess: 'The package download is successful, please check the email',
    dataNone: 'search results is 0',
    generalTrend: 'General Trend',
    notData: 'No matching results found',
    fieldName: 'Field name',
    setVisible: 'Set visible field',
    mustSetVisible: 'The visible fields can\'t be empty',
    setSort: 'Set sort weight',
    toSelectedList: 'Total fields',
    selectedList: 'Selected fields',
    addAllFields: 'Add all',
    visibleTips: 'Support drag-and-drop to change the order, the corresponding list columns from left to right from top to bottom',
    sortTips: 'Support drag-and-drop to change the order, with the higher sort weight on top',
    clear: 'Clear',
    status: 'Status',
    option: 'Operations',
    desc: 'Desc',
    setDesc: 'Desc',
    asc: 'Asc',
    setAsc: 'Asc',
    chooseBusiness: 'Business',
    options: 'Options',
    selected: 'Selector',
    modules: ' modules',
    a: '',
    host: ' hosts',
    entered: 'selected ',
    ips: ' IPs',
    ipPlaceholder: 'Multiple IPs with comma ',
    ipChecked: 'Format is incorrect; duplicate IP;',
    topologySelection: 'Topology',
    manualInput: 'Manual input',
    unableLocate: 'Unable to locate context',
    convergeCycle: 'Converge Cycle',
    ipRule: 'Please enter characters from 3 to 10 characters',
    logPath: 'Log path',
    keyword: 'Keyword',
    log_available: 'The absolute path of the log file, available ',
    log_wildcard_character: 'wildcard character',
    Log_content_filtering: 'Log content filtering',
    suggest_clean: 'To reduce transmission and storage costs, some content can be filtered out, and more complex content can be done in the "Format" function',
    Confirm_disable: 'Confirm to disable this item?',
    Confirm_delete: 'Confirm to delete this item?',
    String_filtering: 'String',
    Separator_filtering: 'Separator',
    Keep_string: 'Include',
    Keep_filtering: 'Exclude',
    Complex_filtering: 'more than 5 conditions affect machine performance',
    How_columns: 'Columns',
    equal_to: 'Equal',
    To_add_delete: 'add/del',
    Start_collecting: 'Start collecting',
    next: 'next',
    select_target: 'select the target',
    Add_list: 'Add to list',
    no_data: 'No data',
    state: 'State',
    Cloud_area: 'Cloud area',
    remove: 'Remove',
    name_nod: 'node name',
    instance: 'instances',
    There: 'total ',
    main_engines: 'main engines',
    Instance_exception: ' instances exception',
    exception: ' agents exception',
    Ip_Format: 'IP Format error or nonexistent, check and try again!',
    search_empty: 'No matching results found',
    recommended_keyword: 'check keyword accuracy',
    IPFormatErrorText: 'IP format error',
    ignoreCase: 'Case Sensitive',
    showPrev: 'Show Prev',
    showNext: 'Show Next',
    quickOperation: 'Hot key  Esc: Quit; PageUp: Backward one screen; PageDn: Forward one screen',
    include: 'Include',
    uninclude: 'Uninclude',
  },
  // 调用链跟踪
  trace: {
    to: 'to',
    Total: 'Total',
    Items: 'Items',
    Item: 'Item',
    page: '',
    each_page: 'each page',
    trace: 'Trace',
    // trace 详情
    connectionChart: 'Connection chart',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    restore: 'Restore',
    log: 'Log',
    viewLog: 'View Log',
    fieldsSetting: 'Fields Setting',
    time_quantum: 'time quantum',
    scene: 'scene',
    serve: 'serve',
    time_consuming: 'time-consuming',
    Return_code: 'Return code',
    Method_calc: 'Method name, function name, or a stage or subtask in a large calculation',
    only_sync: 'Only show sync requests',
  },
  '当前业务没有接入调用链日志，': 'The current business is not access to the trace log. ',
  了解接入详情: 'Learn more about access',
  // 索引集列表
  indexSetList: {
    cluster_name: 'Cluster name',
    index_set: 'IndexSet',
    Index_set_name: 'IndexSetName',
    index: 'Index',
    dataOrigin: 'Data Source',
    clusterName: 'Cluster Name',
    created_time: 'Created At',
    creator: 'Creator',
    jurisdiction: 'Permissions',
    operation: 'Operation',
    addindex: 'Add Index',
    empty: 'Indices is not configured yet',
    bk_biz_name: 'Business',
    jurisdictions: 'Permissions',
    affirm: 'OK',
    cancel: 'Cancel',
    field_name: 'Field',
    field_type: 'Type',
    field_value: 'Value',
    description: 'Description',
    tips: 'Supports "*" matching, not other special symbols',
    alias: 'Index alias',
    time: 'Time field',
    type: 'Time type',
    unit: 'Time format',
    Please_select: 'Please select a third-party storage cluster',
    successfullyMatch: 'Successfully matched index',
    isTraceLog: 'Is Trace Log',
    traceLogTips: 'The trace log stored in ES must meet the following specifications',
    indexSetList: 'Please select data source',
  },
  // 数据源管理
  dataSource: {
    addSource: 'New Data Source',
    editSource: 'Edit Data Source',
    source_name: 'Name',
    scenario_name: 'Type',
    es_host: 'Address',
    es_port: 'Port',
    created_at: 'Creation Time',
    created_by: 'Creator',
    updated_at: 'UpdateTime',
    updated_by: 'Updater',
    operation: 'Operation',
    name: 'Data Source Name',
    host: 'ES Location',
    port: 'Port',
    user: 'Username',
    password: 'Password',
    test: 'Test',
    success: 'Success',
    error: 'Error',
    affirm: 'OK',
    cancel: 'Cancel',
    addIndexSet: 'Add',
    state: 'Collector State',
    succeed: 'Success',
    failed: 'Failed',
    collector_config_name: 'Name',
    table_id: 'Index',
    storage_cluster_name: 'Storage',
    collector_scenario_name: 'Log Type',
    category_name: ' Data Type',
    es_host_state: 'Status',
    click_view: 'Check to view',
    collector_config_unfinished: 'Undone',
    basic_information: 'Basic information',
    Source_log_information: 'Source log information',
    tips_capacity: 'The current capacity of the cluster is ',
    tips_development: '. If you need to support larger storage, please contact the development team or use an independent cluster',
    tips_business: ' This business has exceeded the cluster capacity limit, please contact the development team or use an independent cluster',
    tips_formula: ' ES storage ≈ daily raw log volume * 1.5 (ES conversion rate) * 2 (1 copy) * storage days',
  },
  新建数据源: 'Create Data Source',
  编辑数据源: 'Edit Data Source',
  名称: 'Cluster name',
  地址: 'Domain name',
  端口: 'Port',
  用户名: 'Username',
  密码: 'Password',
  连通性测试: 'Connectivity test',
  '连通成功！': 'Connected successfully!',
  '连通失败！': 'Connected failed!',
  连接状态: 'Connected status!',
  建索引集: 'Create index set',
  '搜索ES源名称，地址，创建人': 'Search cluster name, domain name, creator',
  协议: 'Schema',
  冷热数据: 'Hot-cold data',
  热数据: 'Hot data',
  输入自定义天数: 'Enter custom days and press Enter',
  该集群未开启热数据设置: 'Hot data setting is not enabled for this cluster, ',
  前往ES源进行设置: 'Go to ES source to set',
  最大自定义天数为: 'The maximum number of custom days is',
  天: 'day(s)',
  请输入有效数值: 'Please enter a valid value',
  开: 'Active',
  关: 'Inactive',
  冷热集群设置: 'Hot-cold cluster settings',
  热数据标签: 'Hot-attr tag',
  冷数据标签: 'Cold-attr tag',
  查看实例列表: 'View instance list',
  '没有获取到正确的标签，': 'No correct tags, ',
  查看具体的配置方法: 'browse config document',
  包含属性: 'Nodes that contain the attribute',
  的节点列表: '',
  保存成功: 'Saved successfully',
  // 告警策略
  monitors: {
    allLevel: 'All Alarm Levels',
    selectTimeRange: 'Select time range',
    searchPolicyName: 'Search policy name',
    policyName: 'Policy Name',
    type: 'Types',
    occur: 'Occur Time',
    alarmLevel: 'Alarm Level',
    alarmContent: 'Alarm Content',
    operation: 'Operation',
    detail: 'Details',
    feedback: 'Feedback',
    nowadays: 'Nowadays',
    period_7D: 'Last 7D',
    period_15D: 'Last 15D',
    period_30D: 'Last 30D',
    submitted: 'Submitted successfully',
    fatal: 'Fatal',
    warning: 'Warning',
    remind: 'Remind',
  },
  // 数据源管理
  alarmStrategy: {
    policy_name: 'Policy Name',
    monitor_name: 'Type',
    created_at: 'Creation Time',
    created_by: 'Creator',
    level_name: 'Alarm Level',
    active_name: 'Status',
    operation: 'Operation',
    open: 'Open',
    close: 'Close',
    all_type: 'All types',
    all_level: 'All alarm levels',
    search_policy_name: 'Search policy name',
    stop: 'Confirm to close?',
    start: 'Confirm to open?',
    meg: 'Monitor Message',
    placeholder: 'Access to data platform Indices is only supported for the time being',
    conf: 'The alarm configuration',
    additions: 'Keyword',
    model_id: 'The monitor model',
    describe: 'Using the historical data distribution of keyword occurrence times, the anomaly is found by machine learning',
    statement: 'Retrieval statement',
    config_threshold: 'Trigger threshold (bar)',
    config_range: 'Execution frequency (min)',
    converge_check_window: 'Triggering condition',
    satisfy: 'In the period, it satisfies',
    arithmetic: 'detecting algorithm',
    converge_alarm_window: 'The alarm of convergence',
    recover: 'The state was not restored after the alarm was generated,',
    hour: 'No more alarms for hours',
    way: 'The means of notification',
    level: 'The alarm level',
    initTimeRange: 'The alarm time',
    notice_roles: 'Informant',
    notice_type: 'The means of notification',
    is_active: 'Whether to enable',
    alarm_time: 'Select the alarm time',
  },
  // 屏蔽策略
  shield: {
    policy_name: 'Shielding object',
    time: 'Blocking time',
    created_at: 'Creation time',
    created_by: 'Creator',
    operation: 'Operation',
    policies: 'Shielding object',
    shield_type: 'Shielding way',
    shieldTime: 'Blocking time',
    dateRange: 'beginning and ending time',
    day: 'Specify the number of days',
    reason: 'Blocking reason',
    time_horizon: 'Please select a time range',
    date_range: 'Select date range',
    affirm: 'OK',
    cancel: 'Cancel',
    new: 'New Shielding Strategy',
    edit: 'Edit Masking Strategy',
    isdelete: 'Make sure to delete？',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    saturday: 'saturday',
    weekday: 'weekday',
  },
  // 权限组管理
  permission: {
    group_name: 'Group name',
    users: 'Member',
    created_at: 'Creation time',
    created_by: 'Creation',
    operation: 'Operation',
    edittitle: 'Synchronization self-configuration center, not modifiable',
    deletetitle: 'Synchronization self-configuration center, cannot be deleted',
    add: 'Create user group',
    edit: 'Edit user group',
    tencentTips: 'Separate multiple QQ numbers with English semicolons ";" to separate them. Enter the QQ numbers manually and press Enter to save',
    tips: 'Separate multiple user names with a semicolon ";" in English. Enter the user names manually and press Enter to save',
  },
  configDetails: {
    message: 'Profile',
    state: 'State',
    name: 'Name',
    logType: 'Type',
    dataClassify: 'Data type',
    logPath: 'Log path',
    logSet: 'Charset',
    target: 'Target',
    newly_increased: 'newly increased',
    storageIndexName: 'Index',
    remarkExplain: 'Description',
    filterContent: 'Filter',
    StorageCluster: 'Storage',
    expirationTime: 'Expire',
    the: 'The',
    column: 'Column',
    day: 'day',
    updated_by: 'Updater',
    updated_at: 'Update at',
    created_by: 'Creator',
    created_at: 'Create at',
    ConfigDetails: 'Config Details',
    gatherState: 'Collector State',
    all: 'All',
    succeed: 'Succeed',
    failed: 'Failed',
    Pending: 'Pending',
    goal: 'Target',
    plug_in: 'Plugin Version',
    retry: 'Retry',
    text: 'Automatically deploy every 15 minutes',
    batchRetry: 'Retry',
    dataSampling: 'Data Sample',
    success: 'Success',
    number: 'ID',
    originalLog: 'Log',
    gatherTime: 'Time',
    report: 'View',
    logDetails: 'Report log details',
    and: 'and',
    or: 'or',
    strMatching: 'String ',
    sepMarching: 'Separator ',
    keep: 'Keep matching string',
    Filter: 'Filter matching string',
    selected: '',
    Dynamic_selection: '',
    Been: ' nodes',
    staticHosts: ' hosts',
    serviceTemplates: ' service-templates',
    setTemplates: ' set-templates',
    successful: ' success',
    failure: ' failure',
    static: 'Static',
    dynamic: 'Dynamic',
  },
  动态拓扑: 'Danamic Topo',
  静态拓扑: 'Static Topo',
  不能混用: 'Can\'t mixed',
  服务模板: 'Service Template',
  集群模板: 'Set Template',
  自定义输入: 'Custom Input',
  节点名称: 'Node name',
  服务实例: 'Service Instance',
  Agent状态: 'Agent status',
  分类: 'Assortment',
  云区域: 'Cloud area',
  操作系统: 'Operating system',
  移除所有: 'Remove all',
  搜索模块名: 'Search module name',
  搜索集群名: 'Search set name',
  搜索拓扑节点: 'Search topo node',
  请选择: 'Please select',
  无数据: 'No data',
  结果预览: 'Result preview',
  本页全选: 'Select all in current-page',
  跨页全选: 'Select all by cross-page',
  根节点: 'Root node',
  查无数据: 'No data available',
  已选: 'Has selected',
  个: '',
  节点: 'node(s)',
  异常: 'Abnormal',
  未安装: 'Not-exist',
  内网IP: 'Inner network IP',
  外网IP: 'External network IP',
  其他IP: 'Other IP',
  多个IP以回车为分隔符: 'Multiple IP delimited by carriage return',
  点击解析: 'Click to analysis',
  'IP格式有误或不存在，检查后重试！': 'IP format is incorrect or does not exist, check and try again.',
  IP: 'IP',
  保存: 'Save',
  行首正则调试: 'Multiline-Reg Debug',
  行首正则: 'Multiline-Reg',
  调试: 'Debug',
  最多匹配: 'maximum matches',
  '行，最大耗时': 'lines, maximum expends',
  秒: 'seconds',
  日志样例: 'Log Sample',
  行首正则表达式: 'Multiline-Reg',
  匹配验证: 'Matching Verify',
  成功匹配: 'Successfully matched',
  条日志: 'log lines',
  未成功匹配: 'Match failed',
  dataManage: {
    normal: 'OK',
    abnormal: 'Abnormal',
    not_exist: 'Uninstall',
    Current_instances: ' instances',
    Current_hosts: ' hosts',
    unknown_error: 'Unknown ',
    Return_list: 'Back to list',
    To_retrieve: 'To retrieve',
    add: 'Create successfully',
    edit: 'Modify completed',
    editFinish: 'Modify completed',
    field: 'Modify complete',
    start: 'Enable complete',
    stop: 'Disable complete',
    Within_stop: 'Make sure to finish step 3 "Fomart & Storage " ,if not will be forced to stop after 24H',
    add_btn: 'Add',
    amend: 'Edit ',
    es_host: ' Status ',
    more: 'more',
    perform: 'Submit',
    last: 'Previous',
    next: 'Next',
    Collect_configuration: 'Collector',
    Collection_issued: 'Deploy',
    extraction_storage: 'Fomart & Storage',
    accomplish: 'Finish',
    field_hint: 'Log Fomart can format the log content for easy search and analysis . The default is not open to store the original log',
    Refresh: 'Refresh',
    Field_extraction: 'Format method',
    confirm_append: 'Confirm that the original log is retained and will be stored in the log field. Extracts from other fields will be appended',
    keep_log: 'Original log',
    Commissioning_setup: 'Debug & Settings',
    try_methods: 'Format parsing failed, you can try other  methods',
    regular_format1: 'Regular expressions need to match the full text of the log. For example, the following DEMO will extract the request time and content from the log content',
    regular_format2: ' - Log Content：[2006-01-02 15:04:05] content',
    regular_format3: ' - Expression：\\[(?P<request_time>[^]]+)\\] (?P<content>.+)',
    Settings_Preview: 'Settings & Preview',
    storage: 'Storage',
    input_number: 'English or number, 5 ～ 50 length',
    start_bk: 'Start with business ID + bklog_, supplement letters, numbers or underscores, 5 ~ 50 length',
    View_fields: 'View standard fields',
    select_field: 'Please select a field extraction method',
    conflict: 'Field names conflict with built-in fields',
    Submit: 'Submit as it was?',
    Debug_set: 'The field extraction method or condition has changed, and it will take effect only after the [Debug & Settings] button is clicked.',
    Reset: 'Reset',
    Hide_deleted: 'Hide deleted',
    Field_name: 'Name',
    Alias_field: 'Alias cannot be the same as a built-in field name',
    Field_alias: 'Field name conflicts with built-in field, you must set an alias',
    Alias_only_supports: 'Alias only supports [English, numbers, underscore], and cannot start with a number',
    can_only: 'only contain a-z, A-Z, 0-9, and _, and cannot start and end with _',
    field_expression: 'The field name is the same as the system field, you must modify the regular expression',
    Polymeric: 'Polymeric',
    time_dimensions: 'Time field default settings can be aggregated',
    Participle: 'Participle',
    time: 'Time',
    only_data_time: 'Only one data time can be set, if you want to change, please cancel the original',
    Preview: 'Preview (value)',
    select_format: 'Select time format',
    set: 'When the time format is set, the default data time will be replaced',
    Data_time: 'Data time',
    Field_value: 'Field preview value',
    Time_format: 'Time format',
    Zone_selection: 'Time zone',
    Reset_confirmation: 'Reset',
    Reset_content: 'Reset will lose the current configuration information and reset to the last saved configuration content. Confirm please continue.',
    can_cannot: 'Can only contain a-z, A-Z, 0-9, and _, and cannot start and end with _',
    field_regular: 'The field name is the same as the system field, you must modify the regular expression',
    field_same: 'The field name is the same as the built-in field',
    Reset_bar: 'Reset',
    column_want: 'Setting this column to time will cancel the column that has been set to time. Do you want to continue?',
    After_exception: 'After changing the field type, there may be an exception when retrieving new and old data at the same time, please confirm to continue',
    Alias: 'Rename',
    Optional: '(Optional)',
    alias_replaced: 'Non-required field, it will replace the field name after filling; if the field name is the same as the standard field, it must be renamed.',
    Field_description: 'Alias',
    Search_index_name: 'Search name, storage index name',
    Click_all: 'Show all',
    Selected_participle: 'Selected participle, suitable for word segmentation, not for indicators and dimensions',
    StepInfo: 'The collection target has not been changed, no need to issue',
  },
  搜索服务模板名: 'Search service template name',
  搜索模板名: 'Search template name',
  采集配置: 'Collector',
  采集下发: 'Deploy',
  '字段提取&存储': 'Format & Storage',
  完成: 'Finish',
  容量评估: 'Capacity Assessment',
  点击查看审批详情: 'Approval Details',
  期待接入日期: 'Expected access date',
  '单条日志大小(Bytes)': 'Single log size(Bytes)',
  '单机流量峰值(KB/s)': 'Single host peak(KB/s)',
  '单机增长日志量(G)': 'Single host log increment(G)',
  预计接入的主机数量: 'Expect host counts',
  日志保留天数: 'Log keep days',
  热数据天数: 'Hot data days',
  容量说明: 'Capacity description',
  '容量计算公式：': 'Capacity calculation formula:',
  单机日志增量: 'Single host log increment',
  主机数量: 'host counts',
  存储转化率: 'Conversion rate',
  分片数: 'Shards counts',
  '(日志保留天数 + 1)': '(Log keep days + 1)',
  '注意：': 'Attention:',
  需要申请单独的ES集群: 'Need to apply for a separate ES cluster',
  采集器最大处理能力: 'Maximum processing capacity of the collector is 10M/s. There will be a delay in reporting when the peak traffic of a single machine exceeds',
  '说明：': 'Description:',
  说明存储转化率: 'Storage conversion rate(1.5): The actual space occupied by the original log and metadata storing in the ES cluster',
  说明分片数: 'Shards counts(2): 1 main shard and 1 replicas to avoid data loss caused by node failure',
  申请原因: 'Reason for application',
  提交: 'Submit',
  下一步: 'Next Step',
  上一步: 'Previous Step',
  返回列表: 'Back to List',
  容量评估需要使用独立的ES集群: 'Capacity Assessment needs independent ES cluster',
  请输入索引集名称: 'Search index set name',
  // v3迁移
  migrate: {
    description1: '1. Please confirm the collection items that need to be upgraded, and select the data classification corresponding to the collection items. After confirming that there are no errors, click Batch Upgrade.',
    description2: '2. If you do not need to keep historical data, please check [Current data can be discarded, skip data confirmation and migrate directly], the platform will be used normally after the migration configuration.',
    description3: '3. If historical data needs to be retained, make sure that the old and new collection items are in the same ES cluster. After the collection items are migrated, the platform will maintain two data collections at the same time. During the data confirmation phase, confirm the effective date of the new collection items. After confirmation, the platform will stop the old collection items and migrate the data.',
    description4: '- It is recommended to maintain at least two days of collection at the same time to ensure that there is a complete one-day log comparing new and old collection items',
    description5: '- For migrated historical data, the platform will add index aliases and modify mapping to be compatible with the new version',
    description6: '4. The historical data can be cleaned up. The databus service can be retained for regular cleaning, or it can be manually cleaned up according to the index rules.',
    collectionItemName: 'Collector Name',
    dataClassification: 'Data Type',
    collectionPath: 'Log Path',
    startTime: 'Start',
    migrationSteps: 'Migration steps',
    operation: 'Operation',
    detail: 'Detail',
    retry: 'Retry',
    bulkMigrate: 'Bulk migrate',
    migrateOption: 'Current data can be discarded, skip data confirmation and migrate directly',
    confirmSwitch: 'Confirm',
    date: 'Date',
    originalIndex: 'Original index',
    newIndex: 'New index',
    switchTips: 'Switch from the selected index and confirm that it is irreversible after switching',
    taskLog: 'Task log',
    noLog: 'No logs',
    pleaseCheckNewIndex: 'Please check the new index',
    items: 'items',
  },
  // 无权限初始页
  未接入业务或无可查看的业务权限: 'No business accessed or not authorized to view business',
  新业务接入: 'Access new business',
  新业务接入详情: 'To create a new business in configure platform, click the button and view specific access process.',
  业务接入: 'Access biz',
  获取权限: 'Apply authorization',
  您当前没有业务: 'You have no authorization in business of ',
  的权限: '. ',
  请先申请吧: 'Please apply first!',
  '您当前没有业务权限，请先申请吧！': 'You have no business authorized, please apply first!',
  权限申请: 'Apply authorization',
  请先联系运维同学: 'Please contact operator',
  进行角色的添加: ' to add roles.',
  '您当前没有业务权限，请先联系对应的业务运维同学进行添加!': 'You currently have no business authorized. Please contact operator to add roles.',
  业务DEMO: 'Business demo',
  体验DEMO: 'Experience demo',
  您当前想快速体验下平台的功能: 'Want to quickly experience the functions of the platform?',
  我要体验: 'I want to experience',
  申请业务权限: 'Apply biz authorization',
  过期时间: 'Expiration date',
  正在开发中: 'In development',
  // 权限中心
  申请权限: 'Apply',
  系统: 'System',
  无权限访问: 'No access authority',
  你没有相应资源的访问权限: 'You do not have access to the corresponding resource, please apply for permission or contact the administrator for authorization',
  去申请: 'Go to apply authority',
  该操作需要以下权限: 'This operation requires the following permissions',
  需要申请的权限: 'Permission to apply for',
  关联的资源实例: 'Associated resource instance',
  '权限申请单已提交？': 'Permission application form has been submitted?',
  请在权限中心填写权限申请单: 'Please fill in the permission application form in the permission center, and refresh the page after submission',
  刷新页面: 'Refresh page',
};
