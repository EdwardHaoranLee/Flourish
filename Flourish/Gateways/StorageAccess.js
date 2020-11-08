import { AsyncStorage } from 'react-native';

const STORAGE_KEY_PLANTS = '@plants'
const STORAGE_KEY_REMINDERS = '@reminders'

export default class StorageAccess extends React.Component {
    state = {
        plants: [],
        reminders: []
    }

    savePlants = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY_PLANTS, this.state.plants)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    saveReminders = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY_REMINDERS, this.state.reminders)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    readPlants = async () => {
        try {
            const plants = await AsyncStorage.getItem(STORAGE_KEY_PLANTS)

            if (plants !== null) {
                this.setState({
                    plants: plants
                })
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    readReminders = async () => {
        try {
            const reminders = await AsyncStorage.getItem(STORAGE_KEY_REMINDERS)

            if (reminders !== null) {
                this.setState({
                    reminders: reminders
                })
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
}