package com.example.employeedemo;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class EmployeeDAO {

    private SessionFactory sessionFactory;

    public EmployeeDAO() {
        sessionFactory = Utility.getSessionFactory();
    }

    private Session getSession() {
        return sessionFactory.openSession();
    }

    public void save(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(e);

        tx.commit();
        session.close();
    }

    public Employee getStudent(int id) {
        Session session = getSession();
        Employee s = session.get(Employee.class, id);
        session.close();
        return s;
    }

    public List<Employee> getAllStudents() {
        Session session = getSession();

        List<Employee> students =
                session.createQuery("from Employee", Employee.class)
                       .list();

        session.close();
        return students;
    }

    public void update(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(e);

        tx.commit();
        session.close();
    }

    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Employee s = session.get(Employee.class, id);
        if (e != null) {
            session.remove(e);
        }

        tx.commit();
        session.close();
    }
}
