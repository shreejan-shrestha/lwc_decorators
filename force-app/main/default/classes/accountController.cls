public with sharing class accountController {

    // @AuraEnabled(cacheable=true)
    // public static List<Account> getAccountList() {
    //     return [SELECT Id, Name, Type, Rating,
    //             Phone, Website, AnnualRevenue
    //         FROM Account];
    // }

    @AuraEnabled(cacheable=true)
    public static List<Account>  searchName(String searchKey){
        
        //if(searchKey!='' || searchKey!=null){
            String newSearchKey = '%'+searchKey+'%';
            return [SELECT Id, Name, Type, Rating, Phone, Website, AnnualRevenue FROM Account WHERE Name LIKE :newSearchKey];
            
        // }else {
        //     // system.assert(false, searchKey + '****');
        //     return [SELECT Id, Name, Type, Rating,
        //         Phone, Website, AnnualRevenue
        //     FROM Account];
        // }
    }
}
