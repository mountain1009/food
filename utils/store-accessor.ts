import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AuthModal from '~/store/AuthModal'

let authModal: AuthModal

function initialiseStores(store: Store<any>): void {
  authModal = getModule(AuthModal, store)
}

export { initialiseStores, authModal }
