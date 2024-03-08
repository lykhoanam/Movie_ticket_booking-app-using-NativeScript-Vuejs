<template>
    <ScrollView height="100%">
        <StackLayout padding="0 20 20 20">

            <StackLayout height="20"></StackLayout>
            <!-- Now playing -->
            <Label text="Now Playing" class="bold"></Label>
            <StackLayout height="20"></StackLayout>
            <ScrollView orientation="horizontal" >
                <StackLayout orientation="horizontal">
                    <StackLayout v-for="(image, index) in images" :key="index" :ref="'image' + index" marginRight="20">
                        <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        <Label text="Godzilla x Kong: The New Empire" class="text"></Label>
                        <Label text="March 29, 2024" class="text"></Label>

                    </StackLayout>
                </StackLayout>
            </ScrollView>

            <!-- Popular -->
            <Label text="Popular" class="bold" ></Label>
            <StackLayout height="20"></StackLayout>
            <ScrollView orientation="horizontal" >
                <StackLayout orientation="horizontal">
                    <StackLayout v-for="(image, index) in imageUrl" :key="index" :ref="'image' + index" marginRight="20">
                        <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        <Label text="Godzilla x Kong: The New Empire" class="small-text"></Label>
                    </StackLayout>
                </StackLayout>
            </ScrollView>

            <!-- Upcoming -->
            <Label text="Upcoming" class="bold" ></Label>
            <StackLayout height="20"></StackLayout>
            <ScrollView orientation="horizontal" >
                <StackLayout orientation="horizontal">
                    <StackLayout v-for="(image, index) in imageUrl" :key="index" :ref="'image' + index" marginRight="20">
                        <Image :src="image.src" :height="image.height" :width="image.width" stretch="aspectFill" borderRadius="20"/>
                        <Label text="March 29, 2024" verticalAlign class="small-text"></Label>

                    </StackLayout>
                </StackLayout>
            </ScrollView>
            <StackLayout height="60"></StackLayout>

        </StackLayout>
    </ScrollView>
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

<style src="../android.scss" lang="scss"></style>
