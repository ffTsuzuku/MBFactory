import * as readLine from 'readline'
import * as fs from 'fs'

enum Entities {
    firstName, 
    lastName, 
}

enum DataSource {
    firstName = './data/first_names.csv',
    lastName = './data/last_names.csv',
}

export default class MBFactory {

    constructor(){}
    /**
     * Generates a first name
     * @returns {String}: Returns a valid first name
     */
    async firstName(): Promise<string> {
        const name =  await this.fetchEntity(Entities.firstName)

        // Files currently have each line end with a , since its csv
        return name.slice(0, -1) 
    }

    /**
     * Generates a last name
     * @return {String}: Returns a valid last name
     */
    async lastName(): Promise<string> {
        const name =  await this.fetchEntity(Entities.lastName)

        // Files currently have each line end with a , since its csv
        return name.slice(0, -1)
    }

    /**
     * Generates a number between and including max & min. 
     * @param max: Is the highest possible value of the number. 
     * @param min: Is the lowest possbile value of the number.
     * @returns: A randomly generated number. 
     */
    number(max: number = 1000000, min: number = 0): number {
        return Math.floor(Math.random() * (max-min) + min)
    }

    /**
     * Generates a random date given a range. Or a Date from now to unix origin.
     * @param max : A Unix Timestamp in milliseconds or Date String. 
     * @param min: A Unix Timestamp in milliseconds or Date String. 
     * @return: Returns a milisecond timestamp. 
     */
    date(max: number = Date.now(), min: number = Date.parse('1/1/1970')):number 
    {
        return this.number(max, min)
    }

    /**
     * Returns an random Entity of a choosen type from datasets. 
     * @param position: Can be either firstName or lastName
     * @returns {String}: Returns a valid first name
     */
    async fetchEntity(entity: Entities): Promise<string> {
        const numberNames = 1642641

        let dataSource: string = '';
        if (entity === Entities.firstName) {
            dataSource = DataSource.firstName
        } else if(entity === Entities.lastName) {
            dataSource = DataSource.lastName
        }
        
        const fileStream = fs.createReadStream(dataSource)
        const randomNumber = Math.floor(Math.random() * numberNames)
        const r1 = readLine.createInterface(fileStream)
        let name: string = ''

        let index = 0;

        r1.on('line', async line => {
            if (index === randomNumber) {
                name = line
                r1.close()
            }
            index++
        })

        await new Promise((resolve, reject) => {
            r1.on('close', data => {
                resolve(data)
            })
        })

        return name
    }   
}