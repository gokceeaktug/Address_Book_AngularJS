app.controller('ContactsController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.contacts = contactsService.getContacts();

       

        $scope.showDetails = function (id) {
            var el = angular.element(document.getElementById('#ct-details-' + id));
            el.toggleClass('details-hidden');
        }
    }
]);

app.controller('ContactAddController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.insertContact = function () {
            contactsService.addContact($scope.contact);
            $scope.contact = contactsService.resetContact();
            $location.path('/contacts');
        };
    }
]);


    ;
