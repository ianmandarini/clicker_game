export interface Savable {
  getState(): {[label: string]: any};
  setState(state : {[label: string]: any}): void;
}
