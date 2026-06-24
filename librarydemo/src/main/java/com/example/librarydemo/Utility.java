package com.example.librarydemo;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Utility {
	private static SessionFactory sessionFactory=new Configuration().configure()
									.addAnnotatedClass(Library.class)
									.buildSessionFactory();
	public static void shutdown()
	{
		sessionFactory.close();
	}
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}
