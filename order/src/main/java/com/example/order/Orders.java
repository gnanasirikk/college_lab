package com.example.order;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "orders")
public class Orders {

    @Id
    private int order_id;

    private String name;
    private String food_item;
    private int quantity;
    private double amount;
    private String date;
    private String status;

    public Orders() {}

    public Orders(int order_id,
                  String name,
                  String food_item,
                  String date,
                  int quantity,
                  String status,
                  double amount) {

        this.order_id = order_id;
        this.name = name;
        this.food_item = food_item;
        this.date = date;
        this.quantity = quantity;
        this.status = status;
        this.amount = amount;
    }

    public int getId() {
        return order_id;
    }

    public void setId(int order_id) {
        this.order_id = order_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFooditem() {
        return food_item;
    }

    public void setFooditem(String food_item) {
        this.food_item = food_item;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
    
     
}