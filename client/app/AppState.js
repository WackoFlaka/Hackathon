import { Chicken } from './models/Chicken.js'
import { Message } from './models/Message.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'

class ObservableAppState extends EventEmitter {
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null


  /**
   * @type {Chicken[]}
   */
  chickens = []

  comments = {}
  
   /**
   * @type {Message[]}
   */
  messages = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})