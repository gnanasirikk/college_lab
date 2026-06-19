package com.example.librarydemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	Library r = new Library(123,"Leela's love story", "leela","thriller",231,20); 
		SessionFactory factory = new Configuration().configure().buildSessionFactory(); 
		Session session = factory.openSession(); 
		session.beginTransaction(); 
		session.persist(r); 
		session.getTransaction().commit(); 
		session.close(); 
		factory.close(); 
		System.out.println("Record Inserted Successfully"); 
    }
}
