package com.example.productdemo;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Utility {
	private static SessionFactory sessionFactory=new Configuration().configure()
									.addAnnotatedClass(Product.class)
									.buildSessionFactory();
	public static void shutdown()
	{
		sessionFactory.close();
	}
	public static SessionFactory getSessionFactory() {
		// TODO Auto-generated method stub
		return sessionFactory;
	}
}
