package com.example.productdemo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity



public class Product {
	@Id
	private String name;
	private int idd;
	private int price;
	
	public Product() {}
		public Product(int idd,String name,int price) {
			this.idd = idd;
			this.name = name;
			this.price = price;
		}
	
//		
//	public
public static void main(String[] args) {
//		// TODO Auto-generated method stub
		System.out.println("hi");
	
	}

}
