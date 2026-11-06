import { createContext, useContext } from 'react';

/** React is mounted from Millennium's SharedJSContext, but portals/focus must
 * target the visible Steam window that owns the component tree. */
export const DocumentContext = createContext<Document>(document);
export function useDocument(): Document { return useContext(DocumentContext); }
