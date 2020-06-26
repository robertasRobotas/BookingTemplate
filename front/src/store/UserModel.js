import { types } from 'mobx-state-tree';

const User = types.model('User', {
  displayName: types.string,
  id: types.string,
  email: types.string,
  picture: types.string,
  city: types.maybeNull(types.string),
  preferredSports: types.maybeNull(types.array(types.string)),
}).actions((self) => ({
    saveCityToModel({city}) {
      self.city = city;
    },
    savePreferredSportsToModel({preferredSports}) {
      self.preferredSports = preferredSports;
    },
    sendAditionalData() {
      let additionalData = {
        city: self.city,
        preferredSports: self.preferredSports
      }
      console.log(additionalData);
    },
  }));

export default User;

