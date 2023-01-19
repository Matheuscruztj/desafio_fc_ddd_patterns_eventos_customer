import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerAddressChangedEvent from "../event/customer-address-changed.event";

export class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerAddressChangedEvent> {
    handle(event: CustomerAddressChangedEvent): void {
        const { id, nome, endereco } = event.eventData;
        console.log(`Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`);
    }
}