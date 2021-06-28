import * as readLine from 'readline'
import * as fs from 'fs'

enum Entities {
    firstName, 
    lastName,
    stock,
    company,
}

enum DataSource {
    firstName = './data/first_names.csv',
    lastName = './data/last_names.csv',
    stocks = './data/stocks.csv',
    companies = './data/companies.csv'
}
/** 
enum Industries {
    ElectricalProducts = 'Electrical Products',
    MetalFabrications = 'Metal Fabrications',
    BusinessServices = 'Business Services',
    ServiceToTheHealthIndustry = 'Service to the Health Industry',
    RealEstateInvestmentTrusts = 'Real Estate Investment Trusts',
    AirFreightDeliveryServices = 'Air Freight/Delivery Services',
    InvestmentManagers = 'Investment Managers',
    LifeInsurance = 'Life Insurance',
    DiversifiedCommercialServices = 'Diversified Commercial Services',
    Semiconductors = 'Semiconductors',
    IndustrialMachineryComponents = 'Industrial Machinery/Components',
    OtherSpecialtyStores = 'Other Specialty Stores',
    ComputerManufacturing = 'Computer Manufacturing',
    PreciousMetals = 'Precious Metals',
    TransportationServices = 'Transportation Services',
    MajorPharmaceuticals = 'Major Pharmaceuticals',
    OtherPharmaceuticals = 'Other Pharmaceuticals',
    MajorBanks = 'Major Banks',
    BiotechnologyBiologicalProductsNoDiagnosticSubstances = 'Biotechnology: Biological Products (No Diagnostic Substances)',
    BeveragesProductionDistribution = 'Beverages (Production/Distribution)',
    BiotechnologyInVitroInVivoDiagnosticSubstances = 'Biotechnology: In Vitro & In Vivo Diagnostic Substances',
    MedicalDentalInstruments = 'Medical/Dental Instruments',
    InvestmentBankersBrokersService = 'Investment Bankers/Brokers/Service',
    EngineeringConstruction = 'Engineering & Construction',
    SpecialtyChemicals = 'Specialty Chemicals',
    Advertising = 'Advertising',
    RecreationalProductsToys = 'Recreational Products/Toys',
    PropertyCasualtyInsurers = 'Property-Casualty Insurers',
    Aluminum = 'Aluminum',
    HospitalNursingManagement = 'Hospital/Nursing Management',
    FoodChains = 'Food Chains',
    EDPServices = 'EDP Services',
    MilitaryGovernmentTechnical = 'Military/Government/Technical',
    MultiSectorCompanies = 'Multi-Sector Companies',
    HomeFurnishings = 'Home Furnishings',
    FinanceInvestorsServices = 'Finance/Investors Services',
    ComputerSoftwarePrepackagedSoftware = 'Computer Software: Prepackaged Software',
    CoalMining = 'Coal Mining',
    AutoPartsOEM = 'Auto Parts:O.E.M.',
    DiversifiedFinancialServices = 'Diversified Financial Services',
    TelecommunicationsEquipment = 'Telecommunications Equipment',
    MedicalNursingServices = 'Medical/Nursing Services',
    OilfieldServicesEquipment = 'Oilfield Services/Equipment',
    PowerGeneration = 'Power Generation',
    BuildingProducts = 'Building Products',
    RealEstate = 'Real Estate',
    BiotechnologyLaboratoryAnalyticalInstruments = 'Biotechnology: Laboratory Analytical Instruments',
    ClothingShoeAccessoryStores = 'Clothing/Shoe/Accessory Stores',
    ElectricUtilitiesCentral = 'Electric Utilities: Central',
    ServicesMiscAmusementRecreation = 'Services-Misc. Amusement & Recreation',
    TrustsExceptEducationalReligiousAndCharitable = 'Trusts Except Educational Religious and Charitable',
    BiotechnologyElectromedicalElectrotherapeuticApparatus = 'Biotechnology: Electromedical & Electrotherapeutic Apparatus',
    AccidentHealthInsurance = 'Accident &Health Insurance',
    OtherConsumerServices = 'Other Consumer Services',
    MajorChemicals = 'Major Chemicals',
    ManagedHealthCare = 'Managed Health Care',
    FinanceCompanies = 'Finance Companies',
    WaterSupply = 'Water Supply',
    NewspapersMagazines = 'Newspapers/Magazines',
    IndustrialSpecialties = 'Industrial Specialties',
    MedicalSpecialities = 'Medical Specialities',
    FinanceConsumerServices = 'Finance: Consumer Services',
    Textiles = 'Textiles',
    ProfessionalServices = 'Professional Services',
    Aerospace = 'Aerospace',
    RadioAndTelevisionBroadcastingAndCommunicationsEquipment = 'Radio And Television Broadcasting And Communications Equipment',
    SpecialtyInsurers = 'Specialty Insurers',
    OphthalmicGoods = 'Ophthalmic Goods',
    FarmingSeedsMilling = 'Farming/Seeds/Milling',
    ComputerSoftwareProgrammingDataProcessing = 'Computer Software: Programming Data Processing',
    ComputerPeripheralEquipment = 'Computer peripheral equipment',
    CommercialBanks = 'Commercial Banks',
    OilGasProduction = 'Oil & Gas Production',
    BiotechnologyCommercialPhysicalBiologicalResarch = 'Biotechnology: Commercial Physical & Biological Resarch',
    NaturalGasDistribution = 'Natural Gas Distribution',
    MoviesEntertainment = 'Movies/Entertainment',
    ContainersPackaging = 'Containers/Packaging',
    Broadcasting = 'Broadcasting',
    AssistedLivingServices = 'Assisted Living Services',
    IntegratedOilCompanies = 'Integrated oil Companies',
    RetailComputerSoftwarePeripheralEquipment = 'Retail: Computer Software & Peripheral Equipment',
    CatalogSpecialtyDistribution = 'Catalog/Specialty Distribution',
    PackagedFoods = 'Packaged Foods',
    Tobacco = 'Tobacco',
    OfficeEquipmentSuppliesServices = 'Office Equipment/Supplies/Services',
    TruckingFreightCourierServices = 'Trucking Freight/Courier Services',
    Restaurants = 'Restaurants',
    BuildingOperators = 'Building operators',
    DiversifiedManufacture = 'Diversified Manufacture',
    AutoManufacturing = 'Auto Manufacturing',
    ElectronicComponents = 'Electronic Components',
    MarineTransportation = 'Marine Transportation',
    WholesaleDistributors = 'Wholesale Distributors',
    ConstructionAgEquipmentTrucks = 'Construction/Ag Equipment/Trucks',
    SteelIronOre = 'Steel/Iron Ore',
    AgriculturalChemicals = 'Agricultural Chemicals',
    OilGasTransmission = 'Oil/Gas Transmission',
    EnvironmentalServices = 'Environmental Services',
    SavingsInstitutions = 'Savings Institutions',
    PaintsCoatings = 'Paints/Coatings',
    ConsumerElectronicsVideoChains = 'Consumer Electronics/Video Chains',
    Banks = 'Banks',
    PrecisionInstruments = 'Precision Instruments',
    PlasticProducts = 'Plastic Products',
    DepartmentSpecialtyRetailStores = 'Department/Specialty Retail Stores',
    RETAILBuildingMaterials = 'RETAIL: Building Materials',
    ComputerCommunicationsEquipment = 'Computer Communications Equipment',
    MeatPoultryFish = 'Meat/Poultry/Fish',
    SpecialtyFoods = 'Specialty Foods',
    Apparel = 'Apparel',
    HotelsResorts = 'Hotels/Resorts',
    Homebuilding = 'Homebuilding',
    ShoeManufacturing = 'Shoe Manufacturing',
    RentalLeasingCompanies = 'Rental/Leasing Companies',
    TelevisionServices = 'Television Services',
    PollutionControlEquipment = 'Pollution Control Equipment',
    FluidControls = 'Fluid Controls',
    PackageGoodsCosmetics = 'Package Goods/Cosmetics',
    FoodDistributors = 'Food Distributors',
    MedicalElectronics = 'Medical Electronics',
    OilRefiningMarketing = 'Oil Refining/Marketing',
    Paper = 'Paper',
    Railroads = 'Railroads',
    BuildingMaterials = 'Building Materials',
    Publishing = 'Publishing',
    AutomotiveAftermarket = 'Automotive Aftermarket',
    ConsumerSpecialties = 'Consumer Specialties',
    OtherMetalsAndMinerals = 'Other Metals and Minerals',
    MiscellaneousManufacturingIndustries = 'Miscellaneous manufacturing industries',
    Books = 'Books',
    MotorVehicles = 'Motor Vehicles',
    ElectronicsDistribution = 'Electronics Distribution',
    InternetAndInformationServices = 'Internet and Information Services',
    MiningQuarryingOfNonmetallicMineralsNoFuels = 'Mining & Quarrying of Nonmetallic Minerals (No Fuels)',
    ForestProducts = 'Forest Products',
    ConsumerElectronicsAppliances = 'Consumer Electronics/Appliances',
    OrdnanceAndAccessories = 'Ordnance And Accessories',
    OtherTransportation = 'Other Transportation',
    Miscellaneous = 'Miscellaneous',
    EDPPeripherals = 'EDP Peripherals',
    MiscHealthAndBiotechnologyServices = 'Misc Health and Biotechnology Services',
    ToolsHardware = 'Tools/Hardware',
}
**/

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
        const name: string =  await this.fetchEntity(Entities.lastName)

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
     * Generates a random company from the US Stock Market. 
     * @return: Returns a company name. 
     */
    async company(): Promise<string> {
        return this.fetchEntity(Entities.company)
    }
    /**
     * Returns an random Entity of a choosen type from datasets. 
     * @param entity: The type of entity to generate
     * @returns: Returns a valid  entity
     */
    async fetchEntity(entity: Entities): Promise<string> {
        let dataSource: string = '';

        if (entity === Entities.firstName) {
            dataSource = DataSource.firstName
        } else if(entity === Entities.lastName) {
            dataSource = DataSource.lastName
        } else if (entity === Entities.company) {
            dataSource = DataSource.companies
        }
        
        if (dataSource === '') {
            throw new Error('Unsupported Entity')
        }

        let fileStream = fs.createReadStream(dataSource)
        const r1 = readLine.createInterface(fileStream)

        const numberofEntities: number =  await new Promise((resolve, reject) => {
            let lineCount: number = 0
            r1.on('line', () => {
                lineCount++
            })

            r1.on('close', () => {
                resolve(lineCount)
            })

            r1.on('error', () => {
                reject(0)
            })
        })

        if (numberofEntities === 0) {
            throw new Error('Failed to Fetch Entities')
        }

        fileStream = fs.createReadStream(dataSource)
        const r2 = readLine.createInterface(fileStream)
        const entityIndex = Math.floor(Math.random() * numberofEntities)

        const generatedEntity: string = await new Promise((resolve, reject) => {
            let lineNumber = 0;
            r2.on('line', line => {
                if (lineNumber === entityIndex) {
                    resolve(line)
                } else {
                    lineNumber++
                }
            })
            r2.on('close', () => {
                reject('')
            }) 
            r2.on('error', () => {
                reject('')
            })
        })
        
        if (generatedEntity === '') {
            throw new Error('Failed to fetch entity')
        }
        return generatedEntity
    }   
}