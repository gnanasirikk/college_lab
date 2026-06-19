package com.example.librarydemo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

public class LibraryDAO {

  private SessionFactory sessionFactory;

  public LibraryDAO() {
      sessionFactory = Utility.getSessionFactory();
  }

  private Session getSession() {
      return sessionFactory.openSession();
  }

  public void save(Library r) {
      Session session = getSession();
      Transaction tx = session.beginTransaction();

      session.persist(r);

      tx.commit();
      session.close();
  }

  public Library getStudent(int id) {
      Session session = getSession();
      Library r = session.get(Library.class, id);
      session.close();
      return r;
  }

  public List<Library> getAllStudents() {
      Session session = getSession();

      List<Library> library =
              session.createQuery("from Library", Library.class)
                     .list();

      session.close();
      return library;
  }

  public void update(Library r) {
      Session session = getSession();
      Transaction tx = session.beginTransaction();

      session.merge(r);

      tx.commit();
      session.close();
  }

  public void delete(int id) {
      Session session = getSession();
      Transaction tx = session.beginTransaction();

      Library r = session.get(Library.class, id);
      if (r != null) {
          session.remove(r);
      }

      tx.commit();
      session.close();
  }
}
