package com.redhat.cloudnative;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.MediaType;


@Path("/api/inventory")
@ApplicationScoped
public class InventoryResource {

    @GET
    @Path("/{itemId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Inventory getAvailability(@PathParam("itemId") long itemId) {
        return Inventory.findById(itemId);
    }


    @PUT
    @Transactional
    @Path("/{itemId}")
    public Inventory update(@PathParam("itemId") long itemId, Inventory i) {
        Inventory entity = Inventory.findById(itemId);
        if (entity == null) {
            throw new WebApplicationException("Item with id of " + itemId + " does not exist.", 404);
        }
        entity.quantity = i.quantity;
        return entity;
    }

}
