package com.legomin.model;

/**
 * Created by Виталий on 15.02.2016.
 */
public class Lobbie {
    private User[] users;
    private int userCount;

    public Lobbie(int userCount) {
        this.userCount = userCount;
        this.users = new User[userCount];
    }

    public Lobbie() {
    }

    public User[] getUsers() {
        return users;
    }

    public void setUsers(User[] users) {
        this.users = users;
    }

    public int getUserCount() {
        return userCount;
    }

    public void setUserCount(int userCount) {
        this.userCount = userCount;
    }
}
