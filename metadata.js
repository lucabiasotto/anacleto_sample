{
    application : "ANACLETO_SAMPLE",
    name : "Anacleto",
    appLogo : "",
    menu: [
        {
            label: 'App',
            icon: 'pi pi-fw pi-desktop',
            items: [
                {
                    label: 'Apri window',
                    icon: 'pi pi-fw pi-plus',
                    command: (event) => {
                        navigate('window1');
                    }
                },
                {
                    label: 'Esegui JS',
                    icon: 'pi pi-fw pi-search',
                    command: (event) => {
                        navigate('window2');
                    }
                }
            ]
        }
    ]
};