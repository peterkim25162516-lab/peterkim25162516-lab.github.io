// Asset captions and quantitative claims are traced in source-notes/.
const portfolioV2 = {
en:{
englishCV:'English résumé · Sep 30, 2026',updated:'Version 2 · September 2026',mediaTitle:'Project visuals',challengeTitle:'The problem',resultLabel:'Selected evidence',observed:'Observed maximum',threshold:'Predeclared threshold',metricLabel:'Metric',dataLink:'Download selected measurements',
projects:{
'dexarena':{
image:'/assets/dexarena-scene.png',alt:'Dual-Sharpa hands in a simulated door-opening task',caption:'Task scene preview · team benchmark environment',
video:'/assets/dexarena-wrist-camera.mp4',videoCaption:'Simulated wrist and third-person camera views from reviewed camera-integration assets. A camera demonstration, not a policy success-rate measurement.',
challenge:'A benchmark must make the task definition consistent across hands while keeping observations, controls and success conditions aligned. Policy integration adds another set of interfaces that must agree with the simulator.',
evidence:[['4 task families','Developed or adapted across robot and hand configurations.'],['24 environments','Registered environments from the verified task contribution.'],['7 merged PRs','Verified code contributions to the main branch.']],
outcomeText:'My verified task contribution covered Peg Insertion, Scissor Actuation, Physical Keyboard Typing and YCB Goal-Table: four task families and 24 registered environments. Seven personal pull requests were merged into the main branch. Subsequent work included π0.5 interface adaptation, training and evaluation checks, and methods/configuration text for the team paper draft.',
scope:'The task suite and manuscript are team projects. Counts describe verified code contributions; they are not policy-performance claims. Visuals show a team simulation scene and camera interfaces.'},
'unitree-g1':{
image:'/assets/g1-handover.png',alt:'Unitree G1 in the capstone MuJoCo bimanual handover scene',caption:'Handover task · MuJoCo team capstone scene',
extraImage:'/assets/g1-pickup.png',extraAlt:'Unitree G1 in the capstone low-object pickup workspace',extraCaption:'Pickup workspace · illustration from the team capstone report',
challenge:'Whole-body demonstrations couple balance, locomotion and manipulation. Calibration errors, incomplete episodes and recording-related control degradation can make a trajectory unsuitable for learning.',
evidence:[['VR teleoperation','My main responsibility: calibration, collection and trajectory review.'],['4 tasks','Transfer, Handover, Drawer and Pickup in the team dataset.'],['221 episodes','Final demonstrations retained by the team, not an individual collection count.']],
outcomeText:'My contribution was the teleoperation and data-quality work: calibration support, demonstration collection, episode review and recollection, plus reproduction and rechecking of the recording-related control issue. The team retained 221 demonstration episodes across four tasks. These are team dataset totals; model training and whole-body control were shared system work.',
scope:'Images are extracted from the team capstone report (Illustrations 3-5 and 3-7). The scenes and results shown here are simulation-based.'},
'sharpa-wave':{
image:'/assets/sharpa-contact-traces.svg',alt:'Measured signed-gap traces in MuJoCo and kit-less OVPhysX for a matched left-hand synthetic contact run',caption:'Measured contact traces · fixed-version synthetic experiment',
challenge:'Cross-simulator differences can come from the simulated response or from how a signal is reported. A useful comparison must separate these possibilities and pass repeatability and time-step checks before comparing backends.',
evidence:[['5.5 → 0.5 ms','OVPhysX release-event sensitivity to halving the time step, before and after the call-path change.'],['Unchanged motion','Old and revised OVPhysX trajectories matched in the diagnosis.'],['Differences remain','Cross-engine contact checks still exceeded frozen thresholds.']],
outcomeText:'The revised stepping path stabilized event detection while leaving the recorded motion unchanged. The candidate passed admission, repeatability and time-step checks. Cross-engine response differences remained: the aggregate contact-event timing gap reached 56 ms against a 10 ms threshold.',
chartCaption:'Signed surface gap from matched left-hand contact cases: 2 ms time step, repeat 1, 0–7 s. Every fifth sample is displayed without smoothing or time alignment. The table reports aggregate maxima across the full candidate experiment, rather than only this plotted pair.',
table:[['Contact-event timing','56 ms','10 ms'],['Joint contact effect','0.034306 rad','0.020000 rad'],['Contact-blocked travel','2.580752 mm','2.000000 mm'],['Orientation contact effect','0.050860 rad','0.050000 rad']],
scope:'Experiment: contact-c0-async-v1, 30 September 2026. Fixed-base, position-controlled, zero-gravity, frictionless synthetic sphere–box contact. Contact effects compare contact minus sham within each backend before comparing backends. Remaining differences do not identify a single cause or establish hardware fidelity.'}
}},
zh:{
englishCV:'英文简历 · 2026 年 9 月 30 日',updated:'第二版 · 2026 年 9 月',mediaTitle:'项目画面',challengeTitle:'要解决的问题',resultLabel:'关键证据',observed:'实测最大差',threshold:'预设门槛',metricLabel:'指标',dataLink:'下载精选测量数据',
projects:{
'dexarena':{
image:'/assets/dexarena-scene.png',alt:'双 Sharpa 灵巧手在开门任务中的仿真画面',caption:'任务场景预览 · 团队仿真基准',video:'/assets/dexarena-wrist-camera.mp4',videoCaption:'已复查相机集成素材中的腕部与第三人称视角演示，用于展示相机接口，不作为策略成功率证明。',
challenge:'仿真基准需要在不同手型之间保持任务定义一致，同时对齐观测、控制和成功判定。接入策略后，还需要核对数据和模型接口是否与仿真执行相符。',
evidence:[['4 类任务','已核验的个人任务开发与适配工作。'],['24 个环境','上述任务贡献对应的可注册环境。'],['7 个已合并 PR','进入主分支的个人代码贡献。']],
outcomeText:'已核验的任务贡献覆盖插孔、剪刀操作、物理键盘输入和 YCB 目标桌放置，共 4 类任务、24 个注册环境；7 个个人 PR 已合入主分支。后续参与 π0.5 接口适配、训练评测核查，以及团队论文草稿的方法和配置撰写。',
scope:'任务基准与论文属于团队项目。数量对应已核验的代码贡献，不代表策略性能；画面展示团队任务场景和相机接口。'},
'unitree-g1':{
image:'/assets/g1-handover.png',alt:'本科毕业设计中 Unitree G1 双手交接任务的 MuJoCo 场景',caption:'双手交接任务 · 团队 MuJoCo 仿真场景',extraImage:'/assets/g1-pickup.png',extraAlt:'本科毕业设计中 Unitree G1 低位物体拾取工作区',extraCaption:'低位拾取工作区 · 来自团队毕业设计报告',
challenge:'全身示范同时涉及平衡、行走和操作。标定偏差、回合不完整以及录制时的控制质量下降，都可能影响数据能否用于策略训练。',
evidence:[['VR 全身遥操作','个人主要工作：参与标定、采集与轨迹复查。'],['4 项任务','团队数据覆盖搬运、交接、抽屉与低位拾取。'],['221 个回合','团队最终保留的示范总数，不是个人独立采集量。']],
outcomeText:'个人工作集中在遥操作与数据质量：参与标定、采集示范、复查并重新采集异常回合，以及复现和复验录制相关的控制问题。团队最终保留 4 类任务的 221 个示范回合；模型训练和全身控制属于团队系统工作。',scope:'画面提取自团队毕业设计报告的图 3-5 与图 3-7，此处展示的场景与结果均为仿真。'},
'sharpa-wave':{
image:'/assets/sharpa-contact-traces.svg',alt:'MuJoCo 与 kit-less OVPhysX 在匹配左手合成接触案例中的实测间隙轨迹',caption:'实测接触轨迹 · 固定版本合成接触实验',
challenge:'跨仿真差异既可能来自运动响应，也可能来自信号的读数方式。比较前需要区分两者，并检查重复性和时间步影响。',
evidence:[['5.5 → 0.5 ms','调整调用路径前后，OVPhysX 释放判定对时间步减半的敏感度。'],['运动轨迹不变','诊断中新旧 OVPhysX 运动轨迹保持一致。'],['跨引擎差异仍在','完整复验中，部分接触指标仍超过冻结门槛。']],
outcomeText:'调整步进调用路径后，事件判定更稳定，记录的运动轨迹保持不变。候选通过准入、重复性和时间步检查，但跨引擎响应差异仍然存在：完整实验的接触事件时刻最大差为 56 ms，高于 10 ms 门槛。',
chartCaption:'匹配左手接触案例的有符号表面间隙：时间步 2 ms、第一次重复、0–7 秒。每隔 5 个采样点绘图，未平滑或移动时间轴。下表是完整候选实验的汇总最大差，不仅来自这一组曲线。',
table:[['接触事件时刻','56 ms','10 ms'],['关节接触效应','0.034306 rad','0.020000 rad'],['受接触阻挡的行程','2.580752 mm','2.000000 mm'],['朝向接触效应','0.050860 rad','0.050000 rad']],
scope:'实验为 2026 年 9 月 30 日的 contact-c0-async-v1，范围为固定基座、位置控制、零重力、无摩擦的合成球–盒接触。“接触效应”先在各后端计算 contact 减 sham，再跨后端比较。剩余差异的单一原因尚未确定，不能据此推断实机保真度。'}
}}
};
