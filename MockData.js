const mockData = [
    {
        "testID": 1,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "ANALOGY",
        "testCategory": "Aptitude",
        "testPrice": 100,
    },

    {
        "testID": 2,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "ANTONYMS",
        "testCategory": "Aptitude",
        "testPrice": 120,
    },

    {
        "testID": 3,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "BLOOD-RELATION",
        "testCategory": "Aptitude",
        "testPrice": 200,
    },

    {
        "testID": 4,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "BLOOD-RELATION",
        "testCategory": "Aptitude",
        "testPrice": 150,
    },

    {
        "testID": 5,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "DATA-SUFFICIENCY",
        "testCategory": "Aptitude",
        "testPrice": 300,
    },

    {
        "testID": 6,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "HCF-AND-LCM",
        "testCategory": "Aptitude",
        "testPrice": 200,
    },

    {
        "testID": 7,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "NUMBER-SERIES",
        "testCategory": "Aptitude",
        "testPrice": 50,
    },

    {
        "testID": 8,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "NUMBER-SYSTEM",
        "testCategory": "Aptitude",
        "testPrice": 90,
    },

    {
        "testID": 9,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "PROFIT-AND-LOSS",
        "testCategory": "Aptitude",
        "testPrice": 1200,
    },

    {
        "testID": 10,
        "testImg": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        "testName": "TIME-AND-WORK",
        "testCategory": "Aptitude",
        "testPrice": 300,
    },


    {
        "testID": 11,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg",
        "testName": "IPV4",
        "testCategory": "ComputerNetworks",
        "testPrice": 650,
    },

    {
        "testID": 12,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv6.svg",
        "testName": "IPV6",
        "testCategory": "ComputerNetworks",
        "testPrice": 600,
    },

    {
        "testID": 13,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/area-networks.svg",
        "testName": "AREA-NETWORKS",
        "testCategory": "ComputerNetworks",
        "testPrice": 550,
    },

    {
        "testID": 14,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/datagram-network.svg",
        "testName": "DATAGRAM-NETWORK",
        "testCategory": "ComputerNetworks",
        "testPrice": 420,
    },

    {
        "testID": 15,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/datalink-layer.svg",
        "testName": "DATALINK-LAYER",
        "testCategory": "ComputerNetworks",
        "testPrice": 400,
    },

    {
        "testID": 16,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/osi-model-layer.svg",
        "testName": "OSI-MODEL-LAYER",
        "testCategory": "ComputerNetworks",
        "testPrice": 800,
    },

    {
        "testID": 17,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/protocols.svg",
        "testName": "PROTOCOLS",
        "testCategory": "ComputerNetworks",
        "testPrice": 200,
    },

    {
        "testID": 18,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/physical-layer.svg",
        "testName": "PHYSICAL-LAYER",
        "testCategory": "ComputerNetworks",
        "testPrice": 50,
    },

    {
        "testID": 19,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/network-topologies.svg",
        "testName": "NETWORK-TOPOLOGIES",
        "testCategory": "ComputerNetworks",
        "testPrice": 900,
    },

    {
        "testID": 20,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/transmission-media-modes.svg",
        "testName": "TRANSMISSION-MEDIA-MODES",
        "testCategory": "ComputerNetworks",
        "testPrice": 850,
    },

    {
        "testID": 21,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg",
        "testName": "ARRAY",
        "testCategory": "DataStructures",
        "testPrice": 850,
    },
    {
        "testID": 22,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/binary-search-tree.svg",
        "testName": "BINARY-SEARCH-TREE",
        "testCategory": "DataStructures",
        "testPrice": 750,
    },
    {
        "testID": 23,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/complexity.svg",
        "testName": "COMPLEXITY",
        "testCategory": "DataStructures",
        "testPrice": 650,
    },
    {
        "testID": 24,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/hashing.svg",
        "testName": "HASHING",
        "testCategory": "DataStructures",
        "testPrice": 550,
    },
    {
        "testID": 25,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/heap.svg",
        "testName": "HEAP",
        "testCategory": "DataStructures",
        "testPrice": 450,
    },
    {
        "testID": 26,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/matrix.svg",
        "testName": "MATRIX",
        "testCategory": "DataStructures",
        "testPrice": 350,
    },
    {
        "testID": 27,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/queue.svg",
        "testName": "QUEUE",
        "testCategory": "DataStructures",
        "testPrice": 250,
    },
    {
        "testID": 28,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/linked-list.svg",
        "testName": "LINKED-LIST",
        "testCategory": "DataStructures",
        "testPrice": 1050,
    },
    {
        "testID": 29,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/stack.svg",
        "testName": "STACK",
        "testCategory": "DataStructures",
        "testPrice": 1250,
    },
    {
        "testID": 30,
        "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/infix-expression.svg",
        "testName": "INFIX-EXPRESSION",
        "testCategory": "DataStructures",
        "testPrice": 1850,
    },

]