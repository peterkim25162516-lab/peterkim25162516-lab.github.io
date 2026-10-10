// October 10 update, reconciled with the owner-approved bilingual resumes.
const portfolioV7 = {
en: {
  updated: 'Updated · October 10, 2026',
  chineseCV: 'Chinese résumé · Oct 10, 2026', englishCV: 'English résumé · Oct 10, 2026',
  intro: 'MSc student in Computer Control & Automation at NTU Singapore. Currently a Robot Learning Intern at DexMate, working on benchmark design for manipulation policy evaluation.',
  aboutText2: 'At DexMate, I am defining test tasks and evaluation protocols to compare manipulation policies in simulation and on real robots. The team uses 3D Gaussian Splatting to build visually realistic digital twins of objects, robots and workbenches, with sim-to-real transfer as a research goal. My work is currently at the benchmark-design stage.',
  skills: [['Simulation & evaluation','ManiSkill, MuJoCo, kit-less OVPhysX; task design, policy evaluation and cross-simulator diagnostics.'],['Learning systems','Python, PyTorch, LeRobot, OpenPI / JAX; π0.5 full-parameter and LoRA supervised fine-tuning.'],['Teleoperation & data','VR calibration, demonstration collection, trajectory review and quality checks.'],['Mechanical engineering','SolidWorks / CAD, prototyping, 3D printing, assembly and testing.']],
  experience: [['Oct 2026–Present','DexMate · Singapore','Robot Learning Intern · Designing manipulation tasks and evaluation protocols to compare policy performance in simulation and on real robots.'],['May–Oct 2026','PAIR','Research internship · DexArena task development, π0.5 SFT pipelines and policy evaluation.'],['2026–2027','Nanyang Technological University','MSc in Computer Control & Automation · EEE · Expected May 2027'],['2022–2026','Shanghai Jiao Tong University','BSE in Mechanical Engineering · UM–SJTU Joint Institute'],['Feb–Apr 2025','Medical robotics internship','Project assistant at Ronovo (Shanghai) Medical Technology; documentation, coordination and prototype support.']],
  projects: {
    'dexarena': {
      date: 'May–October 2026', paperStatus: 'Submitted to ICLR 2027',
      tags: ['ManiSkill','π0.5 SFT / LoRA','Policy evaluation'],
      summary: 'Developed dexterous-hand tasks and two π0.5 fine-tuning pipelines; evaluated policies and selected the LoRA pipeline as the project baseline.',
      role: 'Task development, SFT pipelines, evaluation and manuscript methods',
      homeFocus: 'Task engineering, π0.5 fine-tuning & evaluation',
      homeBody: 'Developed or adapted 4 task families and 24 environments. Implemented full-parameter and LoRA SFT pipelines, evaluated both on 30 manipulation tasks and selected LoRA for its better overall performance.',
      quickProblem: 'Compare manipulation policies across dexterous hands, scene variations and long-horizon tasks.',
      quickWork: 'Task development, full-parameter and LoRA SFT, joint/control adaptation and policy evaluation.',
      quickOutcome: 'Both pipelines evaluated on 30 tasks; LoRA selected as the π0.5 baseline based on overall results.',
      contributions: ['Developed and adapted ManiSkill tasks, refining observations, rewards and success checks across hands; adjusted Sharpa and Wuji wrist cameras and checked hand/object visibility.','Designed and implemented full-parameter and LoRA-based π0.5 SFT pipelines, adapting demonstrations and training models. Aligned joint order and state/action mappings for single- and dual-arm joint-position control.','Evaluated both pipelines on 30 manipulation tasks, scene variations and long-horizon tasks; compared success rates and selected LoRA as the project’s π0.5 baseline.','Contributed manuscript methods and experimental setup, documenting model inputs, training, control and evaluation settings and checking them against experiment records.'],
      approachText: 'Aligned task observations, demonstration data, joint channels and executable actions. Compared full-parameter SFT with OpenPI/JAX LoRA and used taskwise evaluation to guide baseline selection. Training budgets and execution protocols also differed, so the comparison does not isolate LoRA as the sole cause of better performance.',
      nodes: ['Multi-hand tasks & demonstrations','Full-parameter SFT / LoRA','Taskwise evaluation & baseline selection'],
      diagram: 'Tasks → fine-tuning → evaluation',
      outcomeText: 'The verified task contribution covers 4 task families, 24 registered environments and 7 merged personal PRs. Later work evaluated both SFT pipelines across 30 manipulation tasks, scene variations and long-horizon tasks, and selected LoRA for better overall performance. The benchmark and paper are team work; these results do not imply ownership of the full benchmark or invention of π0.5 or LoRA.',
      scope: 'The team manuscript is submitted to ICLR 2027; acceptance is not claimed. Paper figures illustrate the team system. Personal code-contribution counts and policy-evaluation scope are distinct. The camera video demonstrates interfaces rather than a successful long-horizon policy rollout.'
    },
    'sharpa-wave': {
      date: 'August–October 2026', paperStatus: 'Submitted to CoRL 2026 · Everything Beneath the Policy Workshop',
      subtitle: 'Motion, contact & object-retention diagnostics',
      summary: 'Compare Sharpa Wave motion, contact readouts and free-ball retention in MuJoCo and kit-less OVPhysX, separating task success from trajectory agreement.',
      homeFocus: 'Cross-simulator diagnosis & free-ball retention',
      homeBody: 'Stabilised contact readouts, used dry-friction controls to explain most tested non-contact fingertip differences, and verified free-ball retention in both backends. Residual dynamics and timestep sensitivity remain.',
      quickProblem: 'Determine which simulator choices change measurements, motion and object-retention outcomes.',
      quickWork: 'Aligned motion tests, contact calibration, friction controls and free-ball retention with collision-disabled controls.',
      quickOutcome: 'Each backend retained the ball in 24/24 registered normal cases; some OVPhysX trajectories remained timestep-sensitive.',
      overview: 'An independent simulation study of publicly available Sharpa Wave models in MuJoCo and kit-less OVPhysX. The study now covers motion, contact and free-ball retention, using fresh-process repeats, matched controls and timestep refinement to distinguish observation semantics from simulated response.',
      challenge: 'Matching parameters or achieving the same task success does not guarantee matching trajectories. Contact signals must be interpreted consistently, and physical response needs separate control and timestep checks.',
      contributions: ['Built model checks and cross-simulator tests with aligned joint mappings, scenes and control inputs; checked joint motion, fingertip trajectories and contact through repeated runs and timestep refinement.','Stabilised contact readouts by changing stepping calls. Used dry-friction controls to explain most fingertip RMS differences in the specified non-contact tests; remaining causes were not fully isolated.','Completed free-ball retention tests in both backends, including held-out position offsets. Collision-disabled controls confirmed that retention depended on hand contact.','Compared normal-case timestep refinements, tested residual-dynamics interventions, and retained the distinction between task success, trajectory convergence and historical parity criteria.'],
      approachText: 'Use matched motion and contact cases, then freeze hand orientation and pre-shaped closure for a 3-second free-ball retention test. Compare nominal and held-out positions, collision-enabled and disabled controls, and 2/1/0.5 ms timesteps. Friction, gains, damping and other interventions are analysed within their tested conditions, rather than treated as general simulator equivalence.',
      nodes: ['Motion & contact calibration','Friction / geometry controls','Retention & timestep checks'], diagram: 'Calibrate → isolate → evaluate',
      paperFigure: true,
      image: '/assets/sharpa-r2-retention.png',
      alt: 'Registered ball-retention results and separate timestep-convergence checks for MuJoCo and OVPhysX',
      caption: 'Free-ball retention · controlled simulation experiment',
      chartCaption: 'Each backend: 24/24 normal retention cases and 0/24 collision-disabled controls. Normal-case timestep-halving position/event checks passed 8/8 in MuJoCo and 6/8 in OVPhysX. Fixed hand, pre-shaped closure and real palm/finger support; this is not tabletop acquisition.',
      gallery: [
        {image:'/assets/sharpa-r2-contact.png',alt:'Cooked contact geometry and force aggregation comparisons',caption:'Contact geometry and force aggregation controls. Observation time bases remain different, so force peaks are not interpreted as a direct physical-accuracy error.'},
        {image:'/assets/sharpa-r2-residual.png',alt:'Registered interventions for remaining non-contact dynamics differences',caption:'Residual-dynamics interventions: none of the new treatments met the predeclared major-cause criterion across both hands and timesteps.'},
        {image:'/assets/sharpa-r2-refinement.png',alt:'Remaining motion differences under finer timestep tests',caption:'Differences persist with 0.25 ms refinement. A coarse timestep alone does not explain the remaining non-contact dynamics difference.'}
      ],
      zoomImage: null, table: null, profileRows: null,
      evidence: [['24/24 per backend','Registered normal ball-retention cases passed in each backend.'],['0/24 per backend','Collision-disabled controls failed the same retention criterion.'],['6/8 OVPhysX','Normal-case timestep-halving checks passed; MuJoCo passed 8/8.']],
      outcomeText: 'Both backends retained a free ball under the registered controller and conditions, including held-out 2 mm offsets. Success did not establish matching trajectories: two normal OVPhysX holdout timestep pairs exceeded the 5 mm object-position limit. Dry-friction controls explained most tested non-contact fingertip differences, but remaining causes were not fully isolated. The historical formal Gate 0 result remains divergent.',
      scope: 'Submitted to the CoRL 2026 Everything Beneath the Policy Workshop; this is a workshop submission, not a main-conference acceptance. Independent, simulation-only results under registered conditions. No hardware or sim-to-real validation, general grasping claim, official endorsement or general simulator parity is established.'
    }
  }
},
zh: {
  updated: '更新于 2026 年 10 月 10 日',
  chineseCV: '中文简历 · 2026 年 10 月 10 日', englishCV: '英文简历 · 2026 年 10 月 10 日',
  intro: '南洋理工大学控制与自动化硕士在读。目前在 DexMate 担任 Robot Learning Intern，负责机器人操作策略评测的 Benchmark 设计。',
  aboutText2: '目前在 DexMate 制定测试任务与评测方案，重点比较机器人操作策略在仿真和真实环境中的表现。团队利用三维高斯泼溅重建物体、机器人和工作台，构建视觉接近真实环境的数字孪生，探索 Sim2Real 迁移；我的工作处于 Benchmark 设计阶段。',
  skills: [['仿真与评测','ManiSkill、MuJoCo、kit-less OVPhysX；任务设计、策略评测与跨仿真诊断。'],['学习系统','Python、PyTorch、LeRobot、OpenPI / JAX；π0.5 全参数与 LoRA 监督微调。'],['遥操作与数据','VR 标定、示范采集、轨迹复查与质量检查。'],['机械工程','SolidWorks / CAD、样机制作、3D 打印、装配与测试。']],
  experience: [['2026.10–至今','DexMate · 新加坡','Robot Learning Intern · 负责 Benchmark 设计，正在制定任务与评测方案，比较操作策略在仿真与真实环境中的表现。'],['2026.05–10','上海物理智能与机器人研究院（PAIR）','研究实习 · DexArena 任务开发、π0.5 微调方案与策略评测。'],['2026–2027','南洋理工大学','控制与自动化硕士 · EEE · 预计 2027 年 5 月完成'],['2022–2026','上海交通大学','密西根学院 · 机械工程 · 工学学士'],['2025.02–04','医疗机器人实习','瑞龙诺赋（上海）医疗科技有限公司 · 项目助理；文档、项目协调与样机支持。']],
  projects: {
    'dexarena': {
      date: '2026 年 5–10 月', paperStatus: 'ICLR 2027 在投',
      tags: ['ManiSkill','π0.5 SFT / LoRA','策略评测'],
      summary: '开发灵巧手操作任务与两套 π0.5 微调方案，完成策略评测，选用 LoRA 方案作为项目基线。',
      role: '任务开发、微调方案、评测与论文方法撰写',
      homeFocus: '任务开发、π0.5 微调与策略评测',
      homeBody: '开发或适配 4 类任务、24 个环境；实现全参数 SFT 与 LoRA 两套方案，完成 30 项操作任务评测，综合结果选用整体表现更好的 LoRA 基线。',
      quickProblem: '比较策略在不同灵巧手、场景变化和长程任务中的表现。',
      quickWork: '任务开发、全参数与 LoRA 微调、关节控制适配及策略评测。',
      quickOutcome: '两套方案完成 30 项任务评测；综合结果选择 LoRA 作为 π0.5 基线。',
      contributions: ['在 ManiSkill 中开发和适配操作任务，完善不同手型的观测、奖励与成功判定；调整 Sharpa、Wuji 腕部相机并检查手部及目标物体的可见性。','设计并实现 π0.5 全参数 SFT 与 LoRA 两套微调方案，完成示范数据适配与模型训练；对齐单臂、双臂任务的关节顺序和状态／动作映射，接入关节位置控制。','完成两套方案在 30 项操作任务上的成功率评测，并比较场景变化和长程任务表现；综合结果选择 LoRA 作为项目的 π0.5 基线。','参与论文方法与实验设置撰写，说明模型输入、训练配置、控制方式及评测方法，并与实际实验记录核对。'],
      approachText: '对齐任务观测、示范数据、关节通道与执行动作，比较全参数 SFT 和 OpenPI/JAX LoRA，通过逐任务评测支持基线选型。两套方案的训练预算和执行方式也有差别，不能把表现差异全部归因于 LoRA。',
      nodes: ['多手型任务与示范数据','全参数 SFT / LoRA','逐任务评测与基线选型'], diagram: '任务 → 微调 → 评测',
      outcomeText: '已核验的任务开发贡献包括 4 类任务、24 个注册环境和 7 个已合并个人 PR。后续完成两套微调方案在 30 项任务、场景变化及长程任务中的评测，综合结果选择整体表现更好的 LoRA 方案。基准与论文属于团队成果，不将整体基准或 π0.5、LoRA 算法归为个人原创。',
      scope: '团队论文处于 ICLR 2027 在投状态，尚不作录用主张。论文配图展示团队系统；个人代码贡献数量与策略评测范围分别陈述。相机视频用于展示接口，不作为长程策略成功回合的录制证明。'
    },
    'sharpa-wave': {
      date: '2026 年 8–10 月', paperStatus: 'CoRL 2026 Everything Beneath the Policy Workshop 在投',
      subtitle: '运动、接触与物体保持诊断',
      summary: '比较 MuJoCo 与 kit-less OVPhysX 中的运动、接触读数和自由球保持，区分任务成功与轨迹一致性。',
      homeFocus: '跨仿真诊断与自由球保持',
      homeBody: '校准接触读数，通过干摩擦对照解释指定无接触任务中的大部分指端差异，并在两端完成自由球保持；剩余动力学原因与部分步长敏感性仍未解决。',
      quickProblem: '分析仿真配置如何改变观测、运动及物体保持结果。',
      quickWork: '对齐运动测试、接触校准、摩擦对照与关闭碰撞的自由球保持实验。',
      quickOutcome: '两端正常保持用例各 24/24 通过；部分 OVPhysX 轨迹仍对步长敏感。',
      overview: '基于公开 Sharpa Wave 模型，对 MuJoCo 与 kit-less OVPhysX 开展独立仿真研究。当前覆盖运动、接触与自由球保持，通过独立进程重复、匹配对照及步长细化，区分观测口径与实际仿真响应。',
      challenge: '参数相同或任务同样成功，都不代表运动轨迹一致。接触读数需要先核对口径，再独立检查控制条件、物理响应和步长敏感性。',
      contributions: ['搭建模型检查与跨仿真测试流程，对齐关节映射、场景和控制输入，通过重复运行与步长细化检查关节运动、指端轨迹和接触响应。','调整步进调用，稳定接触读数；通过干摩擦对照解释指定无接触测试中的大部分指端 RMS 差异，剩余原因尚未完全隔离。','在两端完成自由球保持实验，包含未参与搜索的位置偏移；通过关闭碰撞的对照确认保持依赖手部接触。','比较正常保持条件下的步长细化结果，排查剩余动力学因素，分别报告任务成功、轨迹收敛及历史一致性门槛。'],
      approachText: '先对齐运动与接触对照，再固定手部朝向和预塑形闭合，对自由球开展 3 秒保持实验。比较正常与未见位置、开启与关闭碰撞，以及 2/1/0.5 ms 步长。摩擦、增益、阻尼等干预只在所测试的条件内解释，不将其概括为通用仿真器等价性。',
      nodes: ['运动与接触校准','摩擦／几何对照','保持与步长检查'], diagram: '校准 → 隔离 → 评测',
      paperFigure: true,
      image: '/assets/sharpa-r2-retention.png', alt: 'MuJoCo 与 OVPhysX 的自由球保持结果及独立步长收敛检查',
      caption: '自由球保持 · 受控仿真实验',
      chartCaption: '每个后端正常保持各 24/24，关闭碰撞各 0/24。正常条件步长减半的位置／事件检查：MuJoCo 8/8、OVPhysX 6/8。固定手部、预塑形闭合，允许真实手掌和手指支撑；不等于从桌面自主抓取。',
      gallery: [
        {image:'/assets/sharpa-r2-contact.png',alt:'实际碰撞几何与接触力空间聚合对照',caption:'接触几何与力聚合对照。两端观测时基仍不同，不将力峰直接解释为物理准确度误差。'},
        {image:'/assets/sharpa-r2-residual.png',alt:'针对剩余无接触动力学差异的注册干预结果',caption:'剩余动力学干预：本轮新增处理均未在双手和两个步长下达到预先定义的主要原因标准。'},
        {image:'/assets/sharpa-r2-refinement.png',alt:'更细步长下仍存在的运动差异',caption:'步长细化至 0.25 ms 后差异仍存在，仅用步长过粗不足以解释剩余无接触动力学差异。'}
      ],
      zoomImage: null, table: null, profileRows: null,
      evidence: [['每端 24/24','注册正常自由球保持用例通过。'],['每端 0/24','关闭碰撞对照未通过相同保持标准。'],['OVPhysX 6/8','正常条件步长减半检查通过；MuJoCo 为 8/8。']],
      outcomeText: '在注册控制与场景下，两端均保持住自由球，包含未参与搜索的 2 mm 位置偏移。任务成功不代表轨迹一致：OVPhysX 两对正常 holdout 步长对照超过 5 mm 物体位置差门槛。干摩擦对照解释了指定无接触测试中的大部分指端差异，但剩余原因尚未完全隔离。历史正式 Gate 0 仍为存在差异。',
      scope: '论文处于 CoRL 2026 Everything Beneath the Policy Workshop 在投状态，不代表主会论文或已录用。个人纯仿真研究，结果仅适用于注册条件；不主张实机或 Sim2Real 验证、通用抓取、官方背书或通用仿真器一致性。'
    }
  }
}
};
