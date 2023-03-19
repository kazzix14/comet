use tokio::sync::mpsc;

use crate::Event;

pub struct Sequencer {
    event_sender: mpsc::UnboundedSender<Event>,
    event_receiver: mpsc::UnboundedReceiver<Event>,
}

impl Sequencer {
    pub fn new(
        event_sender: mpsc::UnboundedSender<Event>,
        event_receiver: mpsc::UnboundedReceiver<Event>,
    ) -> Self {
        Self {
            event_receiver,
            event_sender,
        }
    }

    pub async fn run(mut self) {
        println!("start");
        while let Some(event) = self.event_receiver.recv().await {
            println!("got event in sequencer");
            match event {
                Event::HealthCheck => {
                    println!("it's health check");
                    self.event_sender.send(Event::HealthCheck).unwrap();
                }
            }
        }
        println!("end");
    }
}
