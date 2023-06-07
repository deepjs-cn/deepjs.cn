# 算法与数据结构

参照[JavaScript 算法与数据结构](https://github.com/trekhleb/javascript-algorithms)，结合自己的理解，操作一遍各类目

- [JavaScript 算法与数据结构 - 中文版](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)
- https://github.com/imhuay/Algorithm_Interview_Notes-Chinese

## 数据结构

数据结构是在计算机中 组织和存储数 据的一种特殊方式, 它可以高效地 访问和修改 数据。更确切地说, 数据结构是数据值的集合, 它们之间的关系、函数或操作可以应用于数据。

`B` - 初学者, `A` - 进阶

- [ ] `B` [链表](./data-structures/linked-list)
- [ ] `B` [双向链表](./data-structures/doubly-linked-list)
- [ ] `B` [队列](./data-structures/queue)
- [ ] `B` [栈](./data-structures/stack)
- [ ] `B` [哈希表](./data-structures/hash-table)
- [ ] `B` [堆](./data-structures/heap)
- [ ] `B` [优先队列](./data-structures/priority-queue)
- [ ] `A` [字典树](./data-structures/trie)
- [ ] `A` [树](./data-structures/tree)
  - [ ] `A` [二叉查找树](./data-structures/tree/binary-search-tree)
  - [ ] `A` [AVL 树](./data-structures/tree/avl-tree)
  - [ ] `A` [红黑树](./data-structures/tree/red-black-tree)
  - [ ] `A` [线段树](./data-structures/tree/segment-tree) - 使用 最小/最大/总和 范围查询示例
  - [ ] `A` [树状数组](./data-structures/tree/fenwick-tree) (二叉索引树)
- [ ] `A` [图](./data-structures/graph) (有向图与无向图)
- [ ] `A` [并查集](./data-structures/disjoint-set)
- [ ] `A` [布隆过滤器](./data-structures/bloom-filter)

## 算法

算法是如何解决一类问题的明确规范。 算法是一组精确定义操作序列的规则。

### 算法主题

- **数学**
  - [ ] `B` [Bit 操控](./algorithms/math/bits) - set/get/update/clear 位, 乘以/除以 二进制位, 变负 等.
  - [ ] `B` [阶乘](./algorithms/math/factorial)
  - [ ] `B` [斐波那契数](./algorithms/math/fibonacci)
  - [ ] `B` [素数检测](./algorithms/math/primality-test) (排除法)
  - [ ] `B` [欧几里得算法](./algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  - [ ] `B` [最小公倍数](./algorithms/math/least-common-multiple) (LCM)
  - [ ] `B` [素数筛](./algorithms/math/sieve-of-eratosthenes) - 查找所有素数达到任何给定限制
  - [ ] `B` [判断 2 次方数](./algorithms/math/is-power-of-two) - 检查数字是否为 2 的幂 (原生和按位算法)
  - [ ] `B` [杨辉三角形](./algorithms/math/pascal-triangle)
  - [ ] `A` [整数拆分](./algorithms/math/integer-partition)
  - [ ] `A` [割圆术](./algorithms/math/liu-hui) - 基于 N-gons 的近似 π 计算
- **集合**
  - [ ] `B` [笛卡尔积](./algorithms/sets/cartesian-product) - 多集合结果
  - [ ] `A` [幂集](./algorithms/sets/power-set) - 该集合的所有子集
  - [ ] `A` [排列](./algorithms/sets/permutations) (有/无重复)
  - [ ] `A` [组合](./algorithms/sets/combinations) (有/无重复)
  - [ ] `A` [洗牌算法](./algorithms/sets/fisher-yates) - 随机置换有限序列
  - [ ] `A` [最长公共子序列](./algorithms/sets/longest-common-subsequence) (LCS)
  - [ ] `A` [最长递增子序列](./algorithms/sets/longest-increasing-subsequence)
  - [ ] `A` [最短公共父序列](./algorithms/sets/shortest-common-supersequence) (SCS)
  - [ ] `A` [背包问题](./algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  - [ ] `A` [最大子数列问题](./algorithms/sets/maximum-subarray) - BF 算法 与 动态规划
  - [ ] `A` [组合求和](./algorithms/sets/combination-sum) - 查找形成特定总和的所有组合
- **字符串**
  - [ ] `A` [莱温斯坦距离](./algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
  - [ ] `B` [汉明距离](./algorithms/string/hamming-distance) - 符号不同的位置数
  - [ ] `A` [克努斯-莫里斯-普拉特算法](./algorithms/string/knuth-morris-pratt) - 子串搜索
  - [ ] `A` [字符串快速查找](./algorithms/string/rabin-karp) - 子串搜索
  - [ ] `A` [最长公共子串](./algorithms/string/longest-common-substring)
  - `A` [正则表达式匹配](./algorithms/string/regular-expression-matching)
- **搜索**
  - [ ] `B` [线性搜索](./algorithms/search/linear-search)
  - [ ] `B` [跳转搜索](./algorithms/search/jump-search) (或块搜索) - 搜索排序数组
  - [ ] `B` [二分查找](./algorithms/search/binary-search)
  - [ ] `B` [插值搜索](./algorithms/search/interpolation-search) - 搜索均匀分布的排序数组
- **排序**
  - [x] `B` [冒泡排序](./algorithms/sorting/bubble-sort.js)
  - [x] `B` [选择排序](./algorithms/sorting/selection-sort.js)
  - [x] `B` [插入排序](./algorithms/sorting/insertion-sort.js)
  - [ ] `B` [堆排序](./algorithms/sorting/heap-sort.js)
  - [ ] `B` [归并排序](./algorithms/sorting/merge-sort.js)
  - [x] `B` [快速排序](./algorithms/sorting/quick-sort.js)
  - [ ] `B` [希尔排序](./algorithms/sorting/shell-sort.js)
  - [ ] `B` [计数排序](./algorithms/sorting/counting-sort.js)
  - [ ] `B` [基数排序](./algorithms/sorting/radix-sort.js)
- **树**
  - [ ] `B` [深度优先搜索](./algorithms/tree/depth-first-search) (DFS)
  - [ ] `B` [广度优先搜索](./algorithms/tree/breadth-first-search) (BFS)
- **图**
  - [ ] `B` [深度优先搜索](./algorithms/graph/depth-first-search) (DFS)
  - [ ] `B` [广度优先搜索](./algorithms/graph/breadth-first-search) (BFS)
  - [ ] `A` [戴克斯特拉算法](./algorithms/graph/dijkstra) - 找到图中所有顶点的最短路径
  - [ ] `A` [贝尔曼-福特算法](./algorithms/graph/bellman-ford) - 找到图中所有顶点的最短路径
  - [ ] `A` [弗洛伊德算法](./algorithms/graph/floyd-warshall) - 找到所有顶点对 之间的最短路径
  - [ ] `A` [判圈算法](./algorithms/graph/detect-cycle) - 对于有向图和无向图 (基于 DFS 和不相交集的版本)
  - [ ] `A` [普林演算法](./algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  - [ ] `B` [克鲁斯克尔演算法](./algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
  - [ ] `A` [拓扑排序](./algorithms/graph/topological-sorting) - DFS 方法
  - [ ] `A` [关节点](./algorithms/graph/articulation-points) - Tarjan 算法 (基于 DFS)
  - [ ] `A` [桥](./algorithms/graph/bridges) - 基于 DFS 的算法
  - [ ] `A` [欧拉回径与一笔画问题](./algorithms/graph/eulerian-path) - Fleury 的算法 - 一次访问每个边
  - [ ] `A` [哈密顿图](./algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  - [ ] `A` [强连通分量](./algorithms/graph/strongly-connected-components) - Kosaraju 算法
  - [ ] `A` [旅行推销员问题](./algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市
- **未分类**
  - [ ] `B` [汉诺塔](./algorithms/uncategorized/hanoi-tower)
  - [ ] `B` [旋转矩阵](./algorithms/uncategorized/square-matrix-rotation) - 原地算法
  - [ ] `B` [跳跃 游戏](./algorithms/uncategorized/jump-game) - 回溯, 动态编程 (自上而下+自下而上) 和贪婪的例子
  - [ ] `B` [独特(唯一) 路径](./algorithms/uncategorized/unique-paths) - 回溯, 动态编程和基于 Pascal 三角形的例子
  - [ ] `B` [雨水收集](./algorithms/uncategorized/rain-terraces) - 诱捕雨水问题 (动态编程和暴力版本)
  - [ ] `A` [八皇后问题](./algorithms/uncategorized/n-queens)
  - [ ] `A` [骑士巡逻](./algorithms/uncategorized/knight-tour)

### 算法范式

算法范式是基于类的设计的通用方法或方法的算法。 这是一个比算法概念更高的抽象, 就像一个
算法是比计算机程序更高的抽象。

- **BF 算法** - 查找/搜索 所有可能性并选择最佳解决方案

  - [ ] `B` [线性搜索](./algorithms/search/linear-search)
  - [ ] `B` [雨水收集](./algorithms/uncategorized/rain-terraces) - 诱导雨水问题
  - [ ] `A` [最大子数列](./algorithms/sets/maximum-subarray)
  - [ ] `A` [旅行推销员问题](./algorithms/graph/travelling-salesman) - 尽可能以最短的路线访问每个城市并返回原始城市

- **贪心法** - 在当前选择最佳选项, 不考虑以后情况
  - [ ] `B` [跳跃游戏](./algorithms/uncategorized/jump-game)
  - [ ] `A` [背包问题](./algorithms/sets/knapsack-problem)
  - [ ] `A` [戴克斯特拉算法](./algorithms/graph/dijkstra) - 找到所有图顶点的最短路径
  - [ ] `A` [普里姆算法](./algorithms/graph/prim) - 寻找加权无向图的最小生成树 (MST)
  - [ ] `A` [克鲁斯卡尔算法](./algorithms/graph/kruskal) - 寻找加权无向图的最小生成树 (MST)
- **分治法** - 将问题分成较小的部分, 然后解决这些部分
  - [ ] `B` [二分查找](./algorithms/search/binary-search)
  - [ ] `B` [汉诺塔](./algorithms/uncategorized/hanoi-tower)
  - [ ] `B` [杨辉三角形](./algorithms/math/pascal-triangle)
  - [ ] `B` [欧几里得算法](./algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
  - [ ] `B` [跳跃游戏](./algorithms/uncategorized/jump-game)
  - [ ] `B` [归并排序](./algorithms/sorting/merge-sort)
  - [ ] `B` [快速排序](./algorithms/sorting/quick-sort)
  - [ ] `B` [树深度优先搜索](./algorithms/tree/depth-first-search) (DFS)
  - [ ] `B` [图深度优先搜索](./algorithms/graph/depth-first-search) (DFS)
  - [ ] `A` [排列](./algorithms/sets/permutations) (有/无重复)
  - [ ] `A` [组合](./algorithms/sets/combinations) (有/无重复)

* **动态编程** - 使用以前找到的子解决方案构建解决方案

- [ ] `B` [斐波那契数](./algorithms/math/fibonacci)
- [ ] `B` [跳跃游戏](./algorithms/uncategorized/jump-game)
- [ ] `B` [独特路径](./algorithms/uncategorized/unique-paths)
- [ ] `B` [雨水收集](./algorithms/uncategorized/rain-terraces) - 疏导雨水问题
- [ ] `A` [莱温斯坦距离](./algorithms/string/levenshtein-distance) - 两个序列之间的最小编辑距离
- [ ] `A` [最长公共子序列](./algorithms/sets/longest-common-subsequence) (LCS)
- [ ] `A` [最长公共子串](./algorithms/string/longest-common-substring)
- [ ] `A` [最长递增子序列](./algorithms/sets/longest-increasing-subsequence)
- [ ] `A` [最短公共子序列](./algorithms/sets/shortest-common-supersequence)
- [ ] `A` [0-1 背包问题](./algorithms/sets/knapsack-problem)
- [ ] `A` [整数拆分](./algorithms/math/integer-partition)
- [ ] `A` [最大子数列](./algorithms/sets/maximum-subarray)
- [ ] `A` [弗洛伊德算法](./algorithms/graph/floyd-warshall) - 找到所有顶点对之间的最短路径
- [ ] `A` [贝尔曼-福特算法](./algorithms/graph/bellman-ford) - 找到所有图顶点的最短路径
- **回溯法** - 类似于 BF 算法 试图产生所有可能的解决方案, 但每次生成解决方案测试如果它满足所有条件, 那么只有继续生成后续解决方案。 否则回溯并继续寻找不同路径的解决方案。
  - [ ] `B` [跳跃游戏](./algorithms/uncategorized/jump-game)
  - [ ] `B` [独特路径](./algorithms/uncategorized/unique-paths)
  - [ ] `A` [哈密顿图](./algorithms/graph/hamiltonian-cycle) - 恰好访问每个顶点一次
  - [ ] `A` [八皇后问题](./algorithms/uncategorized/n-queens)
  - [ ] `A` [骑士巡逻](./algorithms/uncategorized/knight-tour)
  - [ ] `A` [组合求和](./algorithms/sets/combination-sum) - 从规定的总和中找出所有的组合
- **Branch & Bound**

## 算法复杂度

- 时间复杂度
- 空间复杂度

### 大 O 符号

大 O 符号中指定的算法的增长顺序。

![Big O graphs](./img/big-o-graph.png)

源: [Big O Cheat Sheet](http://bigocheatsheet.com/).

以下是一些最常用的 大 O 标记法 列表以及它们与不同大小输入数据的性能比较。

| 大 O 标记法    | 计算 10 个元素 | 计算 100 个元素 | 计算 1000 个元素 |
| -------------- | -------------- | --------------- | ---------------- |
| **O(1)**       | 1              | 1               | 1                |
| **O(log N)**   | 3              | 6               | 9                |
| **O(N)**       | 10             | 100             | 1000             |
| **O(N log N)** | 30             | 600             | 9000             |
| **O(N^2)**     | 100            | 10000           | 1000000          |
| **O(2^N)**     | 1024           | 1.26e+29        | 1.07e+301        |
| **O(N!)**      | 3628800        | 9.3e+157        | 4.02e+2567       |

### 数据结构操作的复杂性

| 数据结构       |  连接  |  查找  |  插入  |  删除  |
| -------------- | :----: | :----: | :----: | :----: |
| **数组**       |   1    |   n    |   n    |   n    |
| **栈**         |   n    |   n    |   1    |   1    |
| **队列**       |   n    |   n    |   1    |   1    |
| **链表**       |   n    |   n    |   1    |   1    |
| **哈希表**     |   -    |   n    |   n    |   n    |
| **二分查找树** |   n    |   n    |   n    |   n    |
| **B 树**       | log(n) | log(n) | log(n) | log(n) |
| **红黑树**     | log(n) | log(n) | log(n) | log(n) |
| **AVL 树**     | log(n) | log(n) | log(n) | log(n) |

### 数组排序算法的复杂性

| 名称         |   最优   |      平均      |     最坏     |  内存  | 稳定 |
| ------------ | :------: | :------------: | :----------: | :----: | :--: |
| **冒泡排序** |    n     |      n^2       |     n^2      |   1    | Yes  |
| **插入排序** |    n     |      n^2       |     n^2      |   1    | Yes  |
| **选择排序** |   n^2    |      n^2       |     n^2      |   1    |  No  |
| **堆排序**   | n log(n) |    n log(n)    |   n log(n)   |   1    |  No  |
| **归并排序** | n log(n) |    n log(n)    |   n log(n)   |   n    | Yes  |
| **快速排序** | n log(n) |    n log(n)    |     n^2      | log(n) |  No  |
| **希尔排序** | n log(n) | 取决于差距序列 | n (log(n))^2 |   1    |  No  |

- https://leetcode-cn.com/problemset/all/
- https://leetcode-cn.com/problemset/algorithms/
- https://leetcode-cn.com/problemset/database/
- https://leetcode-cn.com/problemset/shell/

- https://www.cnblogs.com/grandyang/p/4606334.html

- https://www.kancloud.cn/kancloud/data-structure-and-algorithm-notes/72897
