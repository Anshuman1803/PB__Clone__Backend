const mockData = [
    {
        "testID": 1,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testTitle": "Aptitude",
        "testCategory": "TopicWise",
        "testPrice": 100,
    },
    {
        "testID": 2,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg",
        "testTitle": "Computer Networks",
        "testCategory": "TopicWise",
        "testPrice": 150,
    },
    {
        "testID": 3,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816734176-anomalies-and-functional-dependency.svg",
        "testTitle": "Database Management System",
        "testCategory": "TopicWise",
        "testPrice": 500,
    },
    {
        "testID": 4,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623765556116-backtracking.svg",
        "testTitle": "Algorithms",
        "testCategory": "TopicWise",
        "testPrice": 6000,
    },


    {
        "testID": 5,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623815849291-arrays-and-pointers.svg",
        "testTitle": "C Language",
        "testCategory": "TopicWise",
        "testPrice": 1000,
    },



    {
        "testID": 6,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623817215289-atomic-transactions.svg",
        "testTitle": "Operating System",
        "testCategory": "TopicWise",
        "testPrice": 8000,
    },



    {
        "testID": 7,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816336071-abstraction.svg",
        "testTitle": "C++ Language",
        "testCategory": "TopicWise",
        "testPrice": 1000,
    },



    {
        "testID": 8,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg",
        "testTitle": "Data Structures",
        "testCategory": "TopicWise",
        "testPrice": 5000,
    },



    {
        "testID": 9,
        "testImg": "https://prepbytes-adaptive-test.s3.ap-south-1.amazonaws.com/images/logic-building.svg",
        "testTitle": "Logic Building - 1",
        "testCategory": "TopicWise",
        "testPrice": 4000,
    },



    {
        "testID": 10,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816917473-access-modifiers-this-super.svg",
        "testTitle": "Java Language",
        "testCategory": "TopicWise",
        "testPrice": 400,
    },


    {
        "testID": 11,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ibm.svg",
        "testCategory": "CompanyWise",
        "testPrice": 400,
    },



    {
        "testID": 12,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hcl.svg",
        "testCategory": "CompanyWise",
        "testPrice": 300,
    },



    {
        "testID": 13,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/zenser.svg",
        "testCategory": "CompanyWise",
        "testPrice": 400,
    },



    {
        "testID": 14,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/accenture.svg",
        "testCategory": "CompanyWise",
        "testPrice": 500,
    },



    {
        "testID": 15,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/techmahindra.svg",
        "testCategory": "CompanyWise",
        "testPrice": 4200,
    },



    {
        "testID": 16,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/wipro.svg",
        "testCategory": "CompanyWise",
        "testPrice": 4300,
    },


    {
        "testID": 17,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/oracle.svg",
        "testCategory": "CompanyWise",
        "testPrice": 100,
    },


    {
        "testID": 18,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/google.svg",
        "testCategory": "CompanyWise",
        "testPrice": 9000,
    },


    {
        "testID": 19,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ericsson.svg",
        "testCategory": "CompanyWise",
        "testPrice": 400,
    },


    {
        "testID": 20,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/amazon.svg",
        "testCategory": "CompanyWise",
        "testPrice": 8400,
    },


    {
        "testID": 21,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg",
        "testTitle": "Aptitude Placement 2022 - Mock test 3",
        "testCategory": "FeaturedMock",
        "testDate": "Sep 24",
        "testPrice": 8400,
        "testParticipants": 1101,
        "testDurition": 60,
    },
    {
        "testID": 22,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504948572-Service%20Based%20Test%203%20icon.svg",
        "testTitle": "Service-Based Companies 2022 - Mock Test 3",
        "testCategory": "FeaturedMock",
        "testDate": "Sep 22",
        "testPrice": 6400,
        "testParticipants": 1000,
        "testDurition": 60,
    },
    {
        "testID": 23,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573432125-Product%20Based%20Test%203%20icon.svg",
        "testTitle": "Product-Based Companies 2022 - Mock Test 3",
        "testCategory": "FeaturedMock",
        "testDate": "Sep 19",
        "testPrice": 400,
        "testParticipants": 2142,
        "testDurition": 60,
    },
    {
        "testID": 24,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
        "testTitle": "Aptitude Placement 2022 - Mock test 2",
        "testCategory": "FeaturedMock",
        "testDate": "Sep 13",
        "testPrice": 2400,
        "testParticipants": 2410,
        "testDurition": 60,
    },
    {
        "testID": 25,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407560177-Service%20based%20icons_Service_based_T5.svg",
        "testTitle": "Service Based Companies Mock Series 2021 - Test 5",
        "testCategory": "FeaturedMock",
        "testDate": "Aug 2",
        "testPrice": 1400,
        "testParticipants": 2564,
        "testDurition": 60,
    },
    {
        "testID": 26,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407518822-Service%20based%20icons_Service_based_T4.svg",
        "testTitle": "Service Based Companies Mock Series 2021 - Test 4",
        "testCategory": "FeaturedMock",
        "testDate": "Jul 31",
        "testPrice": 2400,
        "testParticipants": 1794,
        "testDurition": 60,
    },
    {
        "testID": 27,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427202829-Product+based__Test-3.svg",
        "testTitle": "Product Based Companies Mock Series 2021 - Test 3",
        "testCategory": "FeaturedMock",
        "testDate": "Jul 3",
        "testPrice": 8400,
        "testParticipants": 1804,
        "testDurition": 60,
    },
    {
        "testID": 28,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427096926-Product%20based__Test-1.svg",
        "testTitle": "Product Based Companies Mock Series 2021 - Test 1",
        "testCategory": "FeaturedMock",
        "testDate": "Jun 26",
        "testPrice": 8400,
        "testParticipants": 2372,
        "testDurition": 60,
    },
    {
        "testID": 29,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/Service+Based+Mock+test.svg",
        "testTitle": "Service-based companies Mock Test 1",
        "testCategory": "FeaturedMock",
        "testDate": "Oct 16",
        "testPrice": 600,
        "testParticipants": 1647,
        "testDurition": 60,
    },
    {
        "testID": 30,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/dbms-2.svg",
        "testTitle": "Test your DBMS skills",
        "testCategory": "FeaturedMock",
        "testDate": "Sep 12",
        "testPrice": 9000,
        "testParticipants": 2857,
        "testDurition": 60,
    },





]