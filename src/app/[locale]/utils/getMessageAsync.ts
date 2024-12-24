import { getMessages } from "next-intl/server";


export default function getMessagesSync() {
  let messages: any = {};
  getMessages()
    .then((m) => (messages = m))
    .catch(() => (messages = {}));
  return messages;
}