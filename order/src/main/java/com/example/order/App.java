package com.example.order;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class App {

    public static void main(String[] args) {

        Orders o = new Orders(
                1,
                "Ravi",
                "Chicken Biryani",
                "2026-06-19",
                2,
                "Delivered",
                500.00
        );
        Orders o2 = new Orders(
                2,
                "Srinidhi",
                "Prawns Biryani",
                "2026-06-19",
                2,
                "Not delivered",
                78890.00
        );
        

        SessionFactory factory =
                new Configuration()
                        .configure()
                        .addAnnotatedClass(Orders.class)
                        .buildSessionFactory();

        Session session = factory.openSession();

        session.beginTransaction();

        session.persist(o);

        session.getTransaction().commit();

        session.close();
        factory.close();

        System.out.println("Order Inserted Successfully");
    }
}