// October 21 update: synchronized with PhD CV General v6.
const portfolioV7 = {
  "en": {
    "updated": "Updated · October 21, 2026",
    "chineseCV": "Chinese job résumé · GPA corrected Oct 21",
    "englishCV": "PhD CV · Oct 21, 2026",
    "intro": "MSc student in Computer Control & Automation at NTU Singapore and Robot Learning Intern at DexMate. My research interests include VLA models, world models and generalization across tasks and environments.",
    "aboutText2": "At DexMate, I investigate 3D Gaussian Splatting digital twins for sim-to-real robot learning. I developed a composable task-evaluation prototype that combines geometric and contact predicates with temporal stage graphs, then validated the evaluation loop using recorded simulation trajectories and smoke tests.",
    "skills": [
      [
        "Robot learning",
        "Python, PyTorch, LeRobot, OpenPI / JAX; π0.5 adaptation, full-parameter SFT and LoRA, masked flow-matching supervision."
      ],
      [
        "Simulation & evaluation",
        "ManiSkill, MuJoCo, kit-less OVPhysX; composable task evaluation and cross-simulator diagnostics."
      ],
      [
        "Teleoperation & data",
        "VR calibration, demonstration collection, trajectory review and quality checks."
      ],
      [
        "Mechanical engineering",
        "SolidWorks / CAD, prototyping, 3D printing, assembly and testing."
      ]
    ],
    "experience": [
      [
        "Oct 2026–Present",
        "DexMate · Singapore",
        "Robot Learning Intern · 3DGS digital-twin research and a composable, physics-grounded manipulation evaluation prototype."
      ],
      [
        "May–Oct 2026",
        "PAIR",
        "Research Intern · π0.5 dexterous-hand adaptation, LoRA fine-tuning, long-task training and asynchronous execution. Co-author, ICLR 2027 submission."
      ],
      [
        "2026–2027",
        "Nanyang Technological University",
        "MSc in Computer Control & Automation · EEE · Expected May 2027"
      ],
      [
        "2022–2026",
        "Shanghai Jiao Tong University",
        "BSE in Mechanical Engineering · UM–SJTU Joint Institute"
      ],
      [
        "Feb–Apr 2025",
        "Medical robotics internship",
        "Project assistant at Ronovo (Shanghai) Medical Technology; documentation, coordination and prototype support."
      ]
    ],
    "projects": {
      "dexarena": {
        "date": "May–October 2026",
        "paperStatus": "Co-author · Under review at ICLR 2027",
        "tags": [
          "π0.5 adaptation",
          "LoRA / imitation learning",
          "Asynchronous execution"
        ],
        "summary": "Adapted pretrained π0.5 to high-dimensional dexterous control, with LoRA fine-tuning, stage-pooled learning and latency-aware action fusion.",
        "role": "Pretrained-policy adaptation, learning methods and asynchronous execution",
        "homeFocus": "Dexterous VLA adaptation & learning algorithms",
        "homeBody": "Adapted π0.5 for 29-DoF arm–hand and 58-DoF bimanual control. Developed stage-pooled training and asynchronous action fusion; comparisons supported LoRA baseline selection and improved subtask success with fusion.",
        "quickProblem": "Transfer a pretrained VLA policy to high-dimensional dexterous hands and multi-stage manipulation under inference latency.",
        "quickWork": "Action-projection adaptation, backbone/action-expert LoRA, masked flow matching, stage-pooled training and asynchronous action fusion.",
        "quickOutcome": "A stronger LoRA baseline under the tested configurations and improved subtask success with asynchronous fusion.",
        "contributions": [
          "Adapted action projections for 29-DoF arm–hand and 58-DoF bimanual control, and fine-tuned the vision-language backbone and action expert with LoRA.",
          "Developed stage-pooled training for 10 long-horizon task families / 30 subtasks, with joint-wise normalization and masked flow-matching supervision. Each long task uses one policy conditioned on environment-provided stage instructions.",
          "Implemented latency-aware asynchronous action-chunk fusion: aligned predictions to observation timestamps, discarded stale actions, and blended overlapping chunks in physical joint space.",
          "Compared full-parameter and LoRA fine-tuning and selected the stronger LoRA baseline. Controlled comparisons showed improved subtask success with asynchronous fusion."
        ],
        "approachText": "Retain the pretrained π0.5 architecture while adapting the action representation and supervision to dexterous control. Pool stage demonstrations for each long task, then overlap inference with execution using timestamp alignment and action fusion. Fine-tuning comparisons are interpreted under their tested configurations, rather than attributing every difference solely to LoRA.",
        "nodes": [
          "Dexterous action adaptation",
          "Stage-pooled learning / LoRA",
          "Latency-aware action fusion"
        ],
        "diagram": "Adapt → learn → execute",
        "outcomeText": "The work provides π0.5 dexterous-control baselines and a stage-pooled long-task training framework. The LoRA baseline performed better under the tested configurations, and asynchronous fusion improved subtask success in controlled comparisons. These subtask findings do not establish successful end-to-end completion of every long task.",
        "scope": "Co-author of the associated manuscript, submitted to ICLR 2027 and currently under review; responsible for its π0.5 baseline. DexArena and its figures are team work. Stage instructions are supplied by the environment. Figure counts may reflect an earlier benchmark version; videos demonstrate interfaces rather than proving long-task success.",
        "subtitle": "π0.5 adaptation for dexterous manipulation",
        "overview": "DexArena is a team benchmark for multi-embodiment, multi-stage dexterous manipulation. My research focused on adapting pretrained π0.5 to arm–hand and bimanual action spaces, learning from heterogeneous stage demonstrations, and maintaining continuous execution under inference latency.",
        "challenge": "A pretrained VLA must represent a larger action space, learn consistent physical joint targets from heterogeneous demonstrations, and react to fresh observations while inference and control run asynchronously.",
        "evidence": [
          [
            "29 / 58 DoF",
            "Arm–hand and bimanual action-space adaptation."
          ],
          [
            "10 families / 30 subtasks",
            "Training-framework scope; one policy per long task."
          ],
          [
            "Subtask improvement",
            "Qualitative success gains with asynchronous fusion in controlled comparisons."
          ]
        ]
      },
      "sharpa-wave": {
        "date": "August–October 2026",
        "paperStatus": "Submitted to CoRL 2026 · Everything Beneath the Policy Workshop",
        "subtitle": "Motion, contact & object-retention diagnostics",
        "summary": "Compare Sharpa Wave motion, contact readouts and free-ball retention in MuJoCo and kit-less OVPhysX, separating task success from trajectory agreement.",
        "homeFocus": "Cross-simulator diagnosis & free-ball retention",
        "homeBody": "Stabilised contact readouts, used dry-friction controls to explain most tested non-contact fingertip differences, and verified free-ball retention in both backends. Residual dynamics and timestep sensitivity remain.",
        "quickProblem": "Determine which simulator choices change measurements, motion and object-retention outcomes.",
        "quickWork": "Aligned motion tests, contact calibration, friction controls and free-ball retention with collision-disabled controls.",
        "quickOutcome": "Each backend retained the ball in 24/24 registered normal cases; some OVPhysX trajectories remained timestep-sensitive.",
        "overview": "An independent simulation study of publicly available Sharpa Wave models in MuJoCo and kit-less OVPhysX. The study now covers motion, contact and free-ball retention, using fresh-process repeats, matched controls and timestep refinement to distinguish observation semantics from simulated response.",
        "challenge": "Matching parameters or achieving the same task success does not guarantee matching trajectories. Contact signals must be interpreted consistently, and physical response needs separate control and timestep checks.",
        "contributions": [
          "Built model checks and cross-simulator tests with aligned joint mappings, scenes and control inputs; checked joint motion, fingertip trajectories and contact through repeated runs and timestep refinement.",
          "Stabilised contact readouts by changing stepping calls. Used dry-friction controls to explain most fingertip RMS differences in the specified non-contact tests; remaining causes were not fully isolated.",
          "Completed free-ball retention tests in both backends, including held-out position offsets. Collision-disabled controls confirmed that retention depended on hand contact.",
          "Compared normal-case timestep refinements, tested residual-dynamics interventions, and retained the distinction between task success, trajectory convergence and historical parity criteria."
        ],
        "approachText": "Use matched motion and contact cases, then freeze hand orientation and pre-shaped closure for a 3-second free-ball retention test. Compare nominal and held-out positions, collision-enabled and disabled controls, and 2/1/0.5 ms timesteps. Friction, gains, damping and other interventions are analysed within their tested conditions, rather than treated as general simulator equivalence.",
        "nodes": [
          "Motion & contact calibration",
          "Friction / geometry controls",
          "Retention & timestep checks"
        ],
        "diagram": "Calibrate → isolate → evaluate",
        "paperFigure": true,
        "image": "/assets/sharpa-r2-retention.png",
        "alt": "Registered ball-retention results and separate timestep-convergence checks for MuJoCo and OVPhysX",
        "caption": "Free-ball retention · controlled simulation experiment",
        "chartCaption": "Each backend: 24/24 normal retention cases and 0/24 collision-disabled controls. Normal-case timestep-halving position/event checks passed 8/8 in MuJoCo and 6/8 in OVPhysX. Fixed hand, pre-shaped closure and real palm/finger support; this is not tabletop acquisition.",
        "gallery": [
          {
            "image": "/assets/sharpa-r2-contact.png",
            "alt": "Cooked contact geometry and force aggregation comparisons",
            "caption": "Contact geometry and force aggregation controls. Observation time bases remain different, so force peaks are not interpreted as a direct physical-accuracy error."
          },
          {
            "image": "/assets/sharpa-r2-residual.png",
            "alt": "Registered interventions for remaining non-contact dynamics differences",
            "caption": "Residual-dynamics interventions: none of the new treatments met the predeclared major-cause criterion across both hands and timesteps."
          },
          {
            "image": "/assets/sharpa-r2-refinement.png",
            "alt": "Remaining motion differences under finer timestep tests",
            "caption": "Differences persist with 0.25 ms refinement. A coarse timestep alone does not explain the remaining non-contact dynamics difference."
          }
        ],
        "zoomImage": null,
        "table": null,
        "profileRows": null,
        "evidence": [
          [
            "24/24 per backend",
            "Registered normal ball-retention cases passed in each backend."
          ],
          [
            "0/24 per backend",
            "Collision-disabled controls failed the same retention criterion."
          ],
          [
            "6/8 OVPhysX",
            "Normal-case timestep-halving checks passed; MuJoCo passed 8/8."
          ]
        ],
        "outcomeText": "Both backends retained a free ball under the registered controller and conditions, including held-out 2 mm offsets. Success did not establish matching trajectories: two normal OVPhysX holdout timestep pairs exceeded the 5 mm object-position limit. Dry-friction controls explained most tested non-contact fingertip differences, but remaining causes were not fully isolated. The historical formal Gate 0 result remains divergent.",
        "scope": "Submitted to the CoRL 2026 Everything Beneath the Policy Workshop; this is a workshop submission, not a main-conference acceptance. Independent, simulation-only results under registered conditions. No hardware or sim-to-real validation, general grasping claim, official endorsement or general simulator parity is established."
      }
    },
    "lead": "Learning algorithms for dexterous robot manipulation.",
    "interests": [
      "Robot learning algorithms",
      "Vision-language-action models",
      "Generalization"
    ],
    "aboutText": "At PAIR, I adapted pretrained π0.5 to dexterous arm–hand and bimanual control, developed LoRA fine-tuning and stage-pooled training, and implemented latency-aware asynchronous action fusion. I am a co-author of the associated DexArena manuscript, currently under review at ICLR 2027, and was responsible for its π0.5 baseline."
  },
  "zh": {
    "updated": "更新于 2026 年 10 月 21 日",
    "chineseCV": "中文求职版 · GPA已校正（10月21日）",
    "englishCV": "PhD CV · 2026 年 10 月 21 日",
    "intro": "南洋理工大学控制与自动化硕士在读，目前在 DexMate 担任 Robot Learning Intern。研究兴趣包括 VLA、World Model，以及跨任务与环境的泛化。",
    "aboutText2": "在 DexMate，我研究面向 sim-to-real 机器人学习的 3D Gaussian Splatting 数字孪生，并已开发可组合任务评估原型：通过几何与接触判定模块、时序阶段图跟踪操作进展与诊断失败，使用录制仿真轨迹及端到端试跑验证评估流程。",
    "skills": [
      [
        "机器人学习",
        "Python、PyTorch、LeRobot、OpenPI / JAX；π0.5 适配、全参数与 LoRA 微调、带掩码的 flow-matching 监督。"
      ],
      [
        "仿真与评估",
        "ManiSkill、MuJoCo、kit-less OVPhysX；可组合任务评估与跨仿真诊断。"
      ],
      [
        "遥操作与数据",
        "VR 标定、示范采集、轨迹复查与质量检查。"
      ],
      [
        "机械工程",
        "SolidWorks / CAD、样机制作、3D 打印、装配与测试。"
      ]
    ],
    "experience": [
      [
        "2026.10–至今",
        "DexMate · 新加坡",
        "Robot Learning Intern · 3DGS 数字孪生研究与基于物理真值的可组合操作评估原型。"
      ],
      [
        "2026.05–10",
        "上海物理智能与机器人研究院（PAIR）",
        "Research Intern · π0.5 灵巧手适配、LoRA 微调、长任务训练与异步执行；ICLR 2027 在投稿件作者之一。"
      ],
      [
        "2026–2027",
        "南洋理工大学",
        "控制与自动化硕士 · EEE · 预计 2027 年 5 月完成"
      ],
      [
        "2022–2026",
        "上海交通大学",
        "密西根学院 · 机械工程 · 工学学士"
      ],
      [
        "2025.02–04",
        "医疗机器人实习",
        "瑞龙诺赋（上海）医疗科技有限公司 · 项目助理；文档、项目协调与样机支持。"
      ]
    ],
    "projects": {
      "dexarena": {
        "date": "2026 年 5–10 月",
        "paperStatus": "合著者 · ICLR 2027 审稿中",
        "tags": [
          "π0.5 适配",
          "LoRA／模仿学习",
          "异步执行"
        ],
        "summary": "将预训练 π0.5 适配到高维灵巧控制，开展 LoRA 微调、分阶段数据混合学习及考虑延迟的动作融合。",
        "role": "预训练策略适配、学习方法与异步执行",
        "homeFocus": "灵巧操作 VLA 适配与学习算法",
        "homeBody": "将 π0.5 适配至 29 自由度单臂灵巧手与 58 自由度双臂控制，开发分阶段混合训练和异步动作融合；通过比较选用 LoRA 基线，异步融合在对照实验中提高了子任务成功率。",
        "quickProblem": "将预训练 VLA 迁移到高维灵巧手和多阶段任务，并处理推理延迟下的连续执行。",
        "quickWork": "动作投影适配、骨干与动作专家 LoRA、带掩码的 flow matching、分阶段混合训练与异步融合。",
        "quickOutcome": "选用所测试配置下表现更好的 LoRA 基线；异步融合在对照实验中提高子任务成功率。",
        "contributions": [
          "为 29 自由度单臂灵巧手和 58 自由度双臂控制适配动作投影，并对视觉语言骨干与动作专家开展 LoRA 微调。",
          "面向 10 类长任务／30 个子任务开发分阶段数据混合训练，采用逐关节归一化与带掩码的 flow-matching 监督；每个长任务使用一个由环境阶段指令条件化的策略。",
          "实现考虑延迟的异步动作块融合：按观测时间戳对齐预测，丢弃过期动作，在实际关节空间融合重叠动作块。",
          "比较全参数与 LoRA 微调，选用所测试配置下表现更好的 LoRA 基线；对照实验显示异步融合提高了子任务成功率。"
        ],
        "approachText": "保留预训练 π0.5 架构，针对灵巧控制适配动作表示与训练监督。将同一长任务的阶段示范混合训练，再通过时间戳对齐和动作融合重叠推理与执行。微调比较按实际测试配置解释，不将全部表现差异单独归因于 LoRA。",
        "nodes": [
          "灵巧动作空间适配",
          "分阶段学习／LoRA",
          "考虑延迟的异步融合"
        ],
        "diagram": "适配 → 学习 → 执行",
        "outcomeText": "工作形成了 π0.5 灵巧控制基线及长任务分阶段混合训练框架。LoRA 在所测试配置下表现更好，异步融合在对照实验中提高了子任务成功率。这些子任务结果不代表所有长任务均已实现端到端成功。",
        "scope": "相关稿件作者之一（负责 π0.5 基线），已投 ICLR 2027、审稿中。DexArena 及论文配图属于团队成果。阶段指令由环境提供；配图统计可能对应较早版本，接口视频不作为长任务成功证明。",
        "subtitle": "π0.5 灵巧操作适配与学习方法",
        "overview": "DexArena 是面向多种机器人形态、多阶段灵巧操作的团队基准。我的研究重点是让预训练 π0.5 适配单臂灵巧手和双臂动作空间，从异构阶段示范中学习，并在存在推理延迟时保持连续执行。",
        "challenge": "预训练 VLA 需要表示更大的动作空间，从异构示范中学习一致的物理关节目标，并在推理和控制异步运行时及时利用新观测。",
        "evidence": [
          [
            "29／58 自由度",
            "单臂灵巧手及双臂动作空间适配。"
          ],
          [
            "10 类／30 子任务",
            "训练框架覆盖范围；每个长任务一个策略。"
          ],
          [
            "子任务提升",
            "异步融合在对照实验中带来定性成功率提升。"
          ]
        ]
      },
      "sharpa-wave": {
        "date": "2026 年 8–10 月",
        "paperStatus": "CoRL 2026 Everything Beneath the Policy Workshop 在投",
        "subtitle": "运动、接触与物体保持诊断",
        "summary": "比较 MuJoCo 与 kit-less OVPhysX 中的运动、接触读数和自由球保持，区分任务成功与轨迹一致性。",
        "homeFocus": "跨仿真诊断与自由球保持",
        "homeBody": "校准接触读数，通过干摩擦对照解释指定无接触任务中的大部分指端差异，并在两端完成自由球保持；剩余动力学原因与部分步长敏感性仍未解决。",
        "quickProblem": "分析仿真配置如何改变观测、运动及物体保持结果。",
        "quickWork": "对齐运动测试、接触校准、摩擦对照与关闭碰撞的自由球保持实验。",
        "quickOutcome": "两端正常保持用例各 24/24 通过；部分 OVPhysX 轨迹仍对步长敏感。",
        "overview": "基于公开 Sharpa Wave 模型，对 MuJoCo 与 kit-less OVPhysX 开展独立仿真研究。当前覆盖运动、接触与自由球保持，通过独立进程重复、匹配对照及步长细化，区分观测口径与实际仿真响应。",
        "challenge": "参数相同或任务同样成功，都不代表运动轨迹一致。接触读数需要先核对口径，再独立检查控制条件、物理响应和步长敏感性。",
        "contributions": [
          "搭建模型检查与跨仿真测试流程，对齐关节映射、场景和控制输入，通过重复运行与步长细化检查关节运动、指端轨迹和接触响应。",
          "调整步进调用，稳定接触读数；通过干摩擦对照解释指定无接触测试中的大部分指端 RMS 差异，剩余原因尚未完全隔离。",
          "在两端完成自由球保持实验，包含未参与搜索的位置偏移；通过关闭碰撞的对照确认保持依赖手部接触。",
          "比较正常保持条件下的步长细化结果，排查剩余动力学因素，分别报告任务成功、轨迹收敛及历史一致性门槛。"
        ],
        "approachText": "先对齐运动与接触对照，再固定手部朝向和预塑形闭合，对自由球开展 3 秒保持实验。比较正常与未见位置、开启与关闭碰撞，以及 2/1/0.5 ms 步长。摩擦、增益、阻尼等干预只在所测试的条件内解释，不将其概括为通用仿真器等价性。",
        "nodes": [
          "运动与接触校准",
          "摩擦／几何对照",
          "保持与步长检查"
        ],
        "diagram": "校准 → 隔离 → 评测",
        "paperFigure": true,
        "image": "/assets/sharpa-r2-retention.png",
        "alt": "MuJoCo 与 OVPhysX 的自由球保持结果及独立步长收敛检查",
        "caption": "自由球保持 · 受控仿真实验",
        "chartCaption": "每个后端正常保持各 24/24，关闭碰撞各 0/24。正常条件步长减半的位置／事件检查：MuJoCo 8/8、OVPhysX 6/8。固定手部、预塑形闭合，允许真实手掌和手指支撑；不等于从桌面自主抓取。",
        "gallery": [
          {
            "image": "/assets/sharpa-r2-contact.png",
            "alt": "实际碰撞几何与接触力空间聚合对照",
            "caption": "接触几何与力聚合对照。两端观测时基仍不同，不将力峰直接解释为物理准确度误差。"
          },
          {
            "image": "/assets/sharpa-r2-residual.png",
            "alt": "针对剩余无接触动力学差异的注册干预结果",
            "caption": "剩余动力学干预：本轮新增处理均未在双手和两个步长下达到预先定义的主要原因标准。"
          },
          {
            "image": "/assets/sharpa-r2-refinement.png",
            "alt": "更细步长下仍存在的运动差异",
            "caption": "步长细化至 0.25 ms 后差异仍存在，仅用步长过粗不足以解释剩余无接触动力学差异。"
          }
        ],
        "zoomImage": null,
        "table": null,
        "profileRows": null,
        "evidence": [
          [
            "每端 24/24",
            "注册正常自由球保持用例通过。"
          ],
          [
            "每端 0/24",
            "关闭碰撞对照未通过相同保持标准。"
          ],
          [
            "OVPhysX 6/8",
            "正常条件步长减半检查通过；MuJoCo 为 8/8。"
          ]
        ],
        "outcomeText": "在注册控制与场景下，两端均保持住自由球，包含未参与搜索的 2 mm 位置偏移。任务成功不代表轨迹一致：OVPhysX 两对正常 holdout 步长对照超过 5 mm 物体位置差门槛。干摩擦对照解释了指定无接触测试中的大部分指端差异，但剩余原因尚未完全隔离。历史正式 Gate 0 仍为存在差异。",
        "scope": "论文处于 CoRL 2026 Everything Beneath the Policy Workshop 在投状态，不代表主会论文或已录用。个人纯仿真研究，结果仅适用于注册条件；不主张实机或 Sim2Real 验证、通用抓取、官方背书或通用仿真器一致性。"
      }
    },
    "lead": "研究面向灵巧操作的机器人学习算法。",
    "interests": [
      "机器人学习算法",
      "视觉–语言–动作模型",
      "泛化能力"
    ],
    "aboutText": "在 PAIR，我将预训练 π0.5 适配到灵巧手单臂与双臂控制，开展 LoRA 微调、分阶段数据混合训练，并实现考虑推理延迟的异步动作融合。我是相关 DexArena 稿件的作者之一，负责其中的 π0.5 基线，论文目前在 ICLR 2027 审稿中。"
  }
};
