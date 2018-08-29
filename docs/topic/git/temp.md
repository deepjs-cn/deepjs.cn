
### Git 分支管理策略

> Feature-driven development (FDD)

|调研评估 | 设计 | 设计检验 | Coding | 代码检查 | 部署 |
|------ |:----:| ------:| ------:| -------:| ----:|
| 1%     | 40%  | 3%     | 45%    | 10%    | 1%   |

> 上游优先

<mermaid>
sequenceDiagram
  participant Hotfix
  participant Release
  Note right of Release: tag v1.0.0
  Release->>Dev_1: 新需求1
  Note right of Dev_1: 新需求就新建开发分支
  loop 开发周期1
    Dev_1->>Dev_1: 功能点
  end
  Release->>Hotfix: 线上问题!
  Note left of Hotfix: 问题修复<br/>专用分支hotfix
  Release->>Dev_2: 新需求2
  Hotfix-->>Hotfix: fixed xxx
  Release-->>Hotfix: 要经常同步Release
  Hotfix->>Release: 修复上线!
  Release-->>Release: 发布
  Note right of Release: tag v1.0.1
  Dev_1-x Release: 未同步最新，潜在风险
  Release-->>Dev_1: 要经常同步Release
  Dev_1->>Release: 需求1测试完，pull request
  Release-->>Release: 发布
  Note right of Release: tag v1.1.0
  Release->>Hotfix: 线上问题2!
  Hotfix-->>Hotfix: fixed xxx
  Release-->>Hotfix: 要经常同步Release
  Hotfix->>Release: 修复上线!
  Release-->>Release: 发布
  Note right of Release: tag v1.1.1
  Release-->>Dev_2: 要经常同步Release
  loop 开发周期2
    Dev_2->>Dev_2: 功能点
  end
  Dev_2-x Release: 未同步最新，潜在风险
  Release-->>Dev_2: 要经常同步Release
  Dev_2->>Release: 需求2测试完，pull request
  Release-->>Release: 发布
  Note right of Release: tag v1.2.0
</mermaid>

第一步：根据需求，从master拉出新分支，不区分功能分支或补丁分支。
第二步：新分支开发完成后，或者需要讨论的时候，就向master发起一个pull request（简称PR）。
第三步：Pull Request既是一个通知，让别人注意到你的请求，又是一种对话机制，大家一起评审和讨论你的代码。对话过程中，你还可以不断提交代码。
第四步：你的Pull Request被接受，合并进master，重新部署后，原来你拉出来的那个分支就被删除。（先部署再合并也可。）

Squash 多个commit

为了便于他人阅读你的提交，也便于cherry-pick或撤销代码变化，在发起Pull Request之前，应该把多个commit合并成一个。（前提是，该分支只有你一个人开发，且没有跟master合并过。）

Git分支管理

- master
- release
- nightly
- dev-xxx
- dev-xxx

- 长期分支（发布分支的名称不允许重命名）
  - 发布分支 (release)
    用于存放对外发布的版本，在任何时候拿到的都是稳定的版本，不允许在该分支上开发代码，只允许通过PR提交代码。通常以release、master作为名称。
  - 预发布、提测分支
    是开发完成后的提测分支，当需求开发完成且冒烟测试通过后便可以提交代码到sit分支。可以使用sit、testing作为名称
- 短期分支
  - 特性分支/需求开发分支
    - 功能分支
    - 补丁分支
    - 预发布分支
  - HotFix分支

作为需求开发使用的分支，在启动新需求开发时都会从master拉出一个最新的需求开发分支，只存在于一个版本需求开发周期中，成功上线即删除分支。特性分支的命名以dev_开头，后面拼接具体的子需求名称，例如dev_pay支付需求的开发分支，如果一个版本上线存在多个子需求，那么便会对应子需求建立各自的特性分支(dev_1、dev_2、dev_3)

**“冷冻分支”**当这个特性分支上的需求不能上线或者延期上线该怎么处理呢？因为特性分支只存在于一个版本需求开发周期中，这时候，该需求的特性分支便会变为冷冻特性分支，用于代码贮存及项目代码监控。例如dev_pay支付需求出现延期，这个版本上不了了，那么这个时候便会变为freeze_dev_pay,到下个版本上线时，再申请一起上线，这时候冷冻分支便会转化为一个正常的特性分支dev_pay，努力再上线。

HotFix

线上出现bug怎么办？HotFix只包含热修复分支，作为一个最不想看到的分支却存在着很强的必要性，在我们紧急处理线上的问题的时候起到很大的作用。每个热修复分支的生命周期都是极其短暂的，在问题出现的时候，产生于一个master最稳定的tag版本，在问题修复完成后便会合并到master快速上线，上线成功，hotfix也就结束了。热修复分支的名称以hotfix_v_开头，例如一个v1.3的版本出现了线上问题，便会拉一个hotfix_v1.3的分支。

- https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md
- https://juejin.im/post/5a014d5f518825295f5d56c7
- https://www.jianshu.com/p/801edde8f9a7
