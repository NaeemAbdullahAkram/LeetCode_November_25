/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(A, k) {
    const n = A.length
    const mod = 1_000_000_007
    let acc = 1

    const dp = new Array(n + 1).fill(0)
    dp[0] = 1

    const minq = []
    const maxq = []

    let i = 0
    for (let j = 0; j < n; ++j) {
        while(maxq.length > 0 && A[j] > A[maxq[maxq.length - 1]]) {
            maxq.pop()
        }
        maxq.push(j)

        while(minq.length > 0 && A[j] < A[minq[minq.length - 1]]) {
            minq.pop()
        }
        minq.push(j)

        while(A[maxq[0]] - A[minq[0]] > k) {
            acc = (acc - dp[i] + mod) % mod
            i += 1

            if (minq[0] < i) {
                minq.shift()
            }
            if (maxq[0] < i) {
                maxq.shift()
            }
        }

        dp[j + 1] = acc
        acc = (acc + dp[j + 1]) % mod
    }
    return dp[n]
};