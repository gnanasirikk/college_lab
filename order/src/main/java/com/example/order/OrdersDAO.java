package com.example.order;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class OrdersDAO {

    private SessionFactory sessionFactory;

    public OrdersDAO() {
        sessionFactory = Utility.getSessionFactory();
    }

    private Session getSession() {
        return sessionFactory.openSession();
    }

    public void save(Orders o) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(o);

        tx.commit();
        session.close();
    }

    public Orders getOrder(int id) {
        Session session = getSession();

        Orders o = session.get(Orders.class, id);

        session.close();
        return o;
    }

    public List<Orders> getAllOrders() {
        Session session = getSession();

        List<Orders> orders = session
                .createQuery("from Orders", Orders.class)
                .list();

        session.close();
        return orders;
    }

    public void update(Orders o) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(o);

        tx.commit();
        session.close();
    }

    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Orders o = session.get(Orders.class, id);

        if (o != null) {
            session.remove(o);
        }

        tx.commit();
        session.close();
    }
}