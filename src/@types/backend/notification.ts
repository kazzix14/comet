// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ControllerNotification } from "./controller/notification";
import type { SequencerNotification } from "./sequencer/notification";

export type Notification = { type: "HealthCheck" } | { type: "SequencerNotification", content: SequencerNotification, } | { type: "ControllerNotification", content: ControllerNotification, };