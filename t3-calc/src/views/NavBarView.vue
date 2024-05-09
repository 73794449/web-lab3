<template>
    <div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a @click="moveTo(0)" class="navbar-brand">
                    <img class="logo rounded" src="../assets/logo/logo-dark.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a :class="{'nav-link': true, 'active': isActive(0)}" @click="moveTo(0)">{{ moveToName(0) }}</a>
                        </li>
                        <li class="nav-item">
                            <a :class="{'nav-link': true, 'active': isActive(1)}" @click="moveTo(1)">{{ moveToName(1) }}</a>
                        </li>
                        <li class="nav-item">
                            <a :class="{'nav-link': true, 'active': isActive(2)}" @click="moveTo(2)">{{ moveToName(2) }}</a>
                        </li>
                        <li class="nav-item">
                            <a  :class="{'nav-link': true, 'active': isActive(3)}" @click="moveTo(3)">{{ moveToName(3) }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
</template>
  
<script>
export default {
    name: 'NavbarComponent',
    props: ['active'],
    methods: {
        isLogon()
        {            
            let val = this.active;
            val = val?.substring(0,val.length-5);
            if(val == 'Home' | val == 'Login' | val == 'Register' | val == 'About')
                return "false";
            else
                return "true";
        },
        moveTo(i) {
            if (this.isLogon() == "false") {
                if (i == 0)
                    this.$router.push({ name: 'Home page' });
                else if (i == 1)
                    this.$router.push({ name: 'Login page' });
                else if (i == 2)
                    this.$router.push({ name: 'Register page' });
                else if (i == 3)
                    this.$router.push({ name: 'About page' });
            }
            else {
                if (i == 0)
                    this.$router.push({ name: 'Calculator page' });
                else if (i == 1)
                    this.$router.push({ name: 'Profile page' });
                else if (i == 2){
                    this.$router.push({ name: 'Home page' });
                    localStorage.setItem('current-user',null);
                }
                else if (i == 3){
                    this.$router.push({ name: 'About page' });
                    localStorage.setItem('current-user',null);
                }
            }

        },
        moveToName(i) {
            if (this.isLogon() == "false") {
                if (i == 0)
                    return 'Home';
                else if (i == 1)
                    return 'Login';
                else if (i == 2)
                    return 'Register';
                else if (i == 3)
                    return 'About';
            }
            else {
                if (i == 0)
                    return 'Calculator';
                else if (i == 1)
                    return 'Profile';
                else if (i == 2)
                    return 'Sign out';
                else if (i == 3)
                    return 'About';
            }
        },
        isActive(k)
        {
            let val = toString();
            val = val?.substring(0,val.length-5);
            return this.moveToName(k) == val ? true : false;
        }
    }
};
</script>