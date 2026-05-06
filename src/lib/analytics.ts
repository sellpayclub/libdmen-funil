import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export enum FunnelEvent {
  VSL_VIEW = 'VSL_VIEW',
  QUIZ_START = 'QUIZ_START',
  QUIZ_COMPLETE = 'QUIZ_COMPLETE',
  VSL_WHITE_VIEW = 'VSL_WHITE_VIEW',
  SALES_PAGE_VIEW = 'SALES_PAGE_VIEW',
  CHECKOUT_CLICK = 'CHECKOUT_CLICK',
}

const SESSION_KEY = 'libidmen_session_id';

function getOrSetSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export async function trackEvent(eventName: FunnelEvent, details?: string) {
  try {
    const sessionId = getOrSetSessionId();
    const eventId = crypto.randomUUID();
    const data = {
      sessionId,
      eventName,
      timestamp: serverTimestamp(),
      ...(details ? { details } : {})
    };
    
    await setDoc(doc(db, 'analytics_events', eventId), data);
  } catch (error) {
    console.error("Failed to track event:", error);
  }
}
