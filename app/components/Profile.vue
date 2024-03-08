<template>
    <Page>
        <ActionBar class="actionBar">
            <Label text="TNN MOVIE" class="header"
            verticalAlignment="center" horizontalAlignment="center"></Label>
        </ActionBar>
        <ScrollView height="100%">
            <StackLayout >

                <SearchBar height="40"  hint="Search your movie..."
                v-model="searchQuery"  class="search" borderRadius="20" borderWidth="10" borderColor="black"></SearchBar>
                <StackLayout height="20"></StackLayout>
                <!-- Now playing -->
                <Label text="Now Playing" class="bold" fontSize="18" ></Label>
                <StackLayout height="20"></StackLayout>
                <ScrollView orientation="horizontal" >
                    <StackLayout orientation="horizontal">
                        <StackLayout v-for="(image, index) in images" :key="index" :ref="'image' + index" marginRight="20">
                            <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>

                <!-- Popular -->
                <Label text="Popular" class="bold" fontSize="18" ></Label>
                <StackLayout height="20"></StackLayout>
                <ScrollView orientation="horizontal" >
                    <StackLayout orientation="horizontal">
                        <StackLayout v-for="(image, index) in imageUrl" :key="index" :ref="'image' + index" marginRight="20">
                            <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>

                <!-- Upcoming -->
                <Label text="Upcoming" class="bold" fontSize="18"></Label>
                <StackLayout height="20"></StackLayout>
                <ScrollView orientation="horizontal" >
                    <StackLayout orientation="horizontal">
                        <StackLayout v-for="(image, index) in imageUrl" :key="index" :ref="'image' + index" marginRight="20">
                            <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>
                <StackLayout height="60"></StackLayout>

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data() {
        return {
            images: [
                { src: "https://m.media-amazon.com/images/M/MV5BNGZjYzE4M2MtNmE5ZC00MjdkLThmYTAtNTAyNjQyN2Q4YmVlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg", height: '400', width: '280'},
                { src: "https://m.media-amazon.com/images/M/MV5BOTE5ZTY3NzktYmVkNS00NzRhLWI3YzUtNTA3MDVkYmIzMGVmXkEyXkFqcGdeQXVyMjYwNDA2MDE@.300_.jpg", height: '400', width: '280'},
                { src: "https://m.media-amazon.com/images/M/MV5BN2VjZmI4NTctMmVjMy00NTc0LWE1YzAtMTE0MTg1ZDY2NmQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg", height: '400', width: '280'},
            ],
            imageUrl: [
                { src: "https://m.media-amazon.com/images/M/MV5BNGZjYzE4M2MtNmE5ZC00MjdkLThmYTAtNTAyNjQyN2Q4YmVlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg", height: '200', width: '150'},
                { src: "https://m.media-amazon.com/images/M/MV5BOTE5ZTY3NzktYmVkNS00NzRhLWI3YzUtNTA3MDVkYmIzMGVmXkEyXkFqcGdeQXVyMjYwNDA2MDE@.300_.jpg", height: '200', width: '150'},
                { src: "https://m.media-amazon.com/images/M/MV5BN2VjZmI4NTctMmVjMy00NTc0LWE1YzAtMTE0MTg1ZDY2NmQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.300_.jpg", height: '200', width: '150'},
            ],
        };
    },

};
</script>

<style>
    Page{
        background-color: #0d0d0d;
    }

    .actionBar{
        background-color: rgba(240, 46, 4, 1);
    }

    .bold {
        font-size: 20;
        color: rgba(240, 46, 4, 1);
    }

    .header{
        font-size: 20;
        color: white;
    }

    .search {
        width: 70%;
    }
</style>
