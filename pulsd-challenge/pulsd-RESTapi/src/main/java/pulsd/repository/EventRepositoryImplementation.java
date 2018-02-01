package pulsd.repository;

import org.springframework.stereotype.Repository;
import pulsd.entity.Event;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class EventRepositoryImplementation implements EventRepository{

    @PersistenceContext
    private EntityManager entityManager;

    public List<Event> findAll() {
        TypedQuery<Event> query = entityManager.createNamedQuery("Event.findAll()", Event.class);
        return query.getResultList();
    }

    public Event findOne(String id) {
        return entityManager.find(Event.class, id);
    }

    public Event create(Event e) {
        entityManager.persist(e);
        return e;
    }
}
