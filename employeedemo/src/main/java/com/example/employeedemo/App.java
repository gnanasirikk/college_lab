package com.example.employeedemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class App 
{
    public static void main( String[] args )
    {
    	Employee e = new Employee(2, "Leela", "eee","20-2-2013",890980); 
		SessionFactory factory = new Configuration().configure().buildSessionFactory(); 
		Session session = factory.openSession(); 
		session.beginTransaction(); 
		session.persist(e); 
		session.getTransaction().commit(); 
		session.close(); 
		factory.close(); 
		System.out.println("Record Inserted Successfully");     }
}
