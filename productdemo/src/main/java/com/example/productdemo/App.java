package com.example.productdemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class App {
    public static void main(String[] args) {

        Product p = new Product(1, "Laptop", 50000);

        SessionFactory factory =
                new Configuration().configure().buildSessionFactory();

        Session session = factory.openSession();

        session.beginTransaction();

        session.persist(p);

        session.getTransaction().commit();

        session.close();
        factory.close();

        System.out.println("Record Inserted Successfully");
    }
}