class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        total = sum(nums)
        need = total % p

        # Si déjà divisible : je ne fais rien et je ne retire rien
        if need == 0:
            return 0

        prefix = 0
        seen = {0: -1}
        res = len(nums)

        for i, num in enumerate(nums):
            prefix = (prefix + num) % p

            # Je cherchce a faire une recherche prefix[i] = (prefix[j] - need + p) % p
            target = (prefix - need) % p

            if target in seen:
                res = min(res, i - seen[target])

            seen[prefix] = i

        return res if res < len(nums) else -1