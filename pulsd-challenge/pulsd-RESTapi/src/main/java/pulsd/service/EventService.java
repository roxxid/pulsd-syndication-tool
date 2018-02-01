package pulsd.service;

import pulsd.entity.Event;

import java.util.List;

public interface EventService {
    List<Event> findAll();
    Event findOne(String id);
    Event create(Event e);
}
