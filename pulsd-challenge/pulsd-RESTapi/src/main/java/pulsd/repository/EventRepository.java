package pulsd.repository;

import pulsd.entity.Event;

import java.util.List;

public interface EventRepository {
    List<Event> findAll();
    Event findOne(String id);
    Event create(Event e);
}
