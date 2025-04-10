
class Solution {

    public static void main(String[] args) {
        int prices[] = { 100, 180, 260, 310, 40, 535, 695 };

        System.out.println(new Solution().maximumProfit(prices));
    }

    public int maximumProfit(int prices[]) {
        // code here
        if (prices.length <= 1) {
            return 0;
        }

        int i = 0;
        int purchaseCost = 0;
        int max = 0;

        for (int j = 1; j < prices.length; i++) {

            if (prices[j] < prices[i] && purchaseCost != -1) {
                max = purchaseCost - prices[i];
                purchaseCost = -1;
            }

            if (prices[j] > prices[i]) {
                purchaseCost = prices[i];
            }

        }

        return max;

    }
}