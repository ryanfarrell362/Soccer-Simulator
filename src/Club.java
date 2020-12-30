import java.util.Random;

public class Club {
    private int ID;
    private String name;

    private int currentWins;
    private int currentDraws;
    private int currentLosses;
    private int currentGoalsFor;
    private int currentGoalsAgainst;

    private int totalWins;
    private int totalDraws;
    private int totalLosses;
    private int totalGoalsFor;
    private int totalGoalsAgainst;
    private int totalTrophies;

    private int sway;

    public Club (int num, int VARIATION) {
        this.ID = num;
        this.name = "Team " + (num + 1);

        this.currentWins = 0;
        this.currentDraws = 0;
        this.currentLosses = 0;
        this.currentGoalsFor = 0;
        this.currentGoalsAgainst = 0;

        this.totalWins = 0;
        this.totalDraws = 0;
        this.totalLosses = 0;
        this.totalGoalsFor = 0;
        this.totalGoalsAgainst = 0;
        this.totalTrophies = 0;

        Random rand = new Random();
        this.sway = rand.nextInt(VARIATION) + 100 - (VARIATION / 2);
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCurrentWins() {
        return currentWins;
    }

    public void setCurrentWins(int currentWins) {
        this.currentWins = currentWins;
    }

    public int getCurrentDraws() {
        return currentDraws;
    }

    public void setCurrentDraws(int currentDraws) {
        this.currentDraws = currentDraws;
    }

    public int getCurrentLosses() {
        return currentLosses;
    }

    public void setCurrentLosses(int currentLosses) {
        this.currentLosses = currentLosses;
    }

    public int getCurrentGoalsFor() {
        return currentGoalsFor;
    }

    public void setCurrentGoalsFor(int currentGoalsFor) {
        this.currentGoalsFor = currentGoalsFor;
    }

    public int getCurrentGoalsAgainst() {
        return currentGoalsAgainst;
    }

    public void setCurrentGoalsAgainst(int currentGoalsAgainst) {
        this.currentGoalsAgainst = currentGoalsAgainst;
    }

    public int getTotalWins() {
        return totalWins;
    }

    public void setTotalWins(int totalWins) {
        this.totalWins = totalWins;
    }

    public int getTotalDraws() {
        return totalDraws;
    }

    public void setTotalDraws(int totalDraws) {
        this.totalDraws = totalDraws;
    }

    public int getTotalLosses() {
        return totalLosses;
    }

    public void setTotalLosses(int totalLosses) {
        this.totalLosses = totalLosses;
    }

    public int getTotalGoalsFor() {
        return totalGoalsFor;
    }

    public void setTotalGoalsFor(int totalGoalsFor) {
        this.totalGoalsFor = totalGoalsFor;
    }

    public int getTotalGoalsAgainst() {
        return totalGoalsAgainst;
    }

    public void setTotalGoalsAgainst(int totalGoalsAgainst) {
        this.totalGoalsAgainst = totalGoalsAgainst;
    }

    public int getTotalTrophies() {
        return totalTrophies;
    }

    public void setTotalTrophies(int totalTrophies) {
        this.totalTrophies = totalTrophies;
    }

    public int getSway() {
        return sway;
    }

    public void setSway(int sway) {
        this.sway = sway;
    }

    @Override
    public String toString () {
        String output = "";

        output += "Club Name: " + getName() + "\n";
        output += "Total Wins: " + getTotalWins() + "\n";
        output += "Total Losses: " + getTotalLosses() + "\n";
        output += "Total Draws: " + getTotalDraws() + "\n";
        output += "Total Goals For: " + getTotalGoalsFor() + "\n";
        output += "Total Goals Against: " + getTotalGoalsAgainst() + "\n";
        output += "Total Goal Differential: " + (getTotalGoalsFor() - getTotalGoalsAgainst()) + "\n";
        output += "Total Trophies: " + getTotalTrophies() + "\n";
        output += "Sway : " + getSway() + "\n";

        return output;
    }
}
