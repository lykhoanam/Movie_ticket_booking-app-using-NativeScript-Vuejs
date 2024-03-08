<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true" backgroundImage="~/assets/images/bg.jpg"
    backgroundSize="cover" backgroundPosition="center">
      <GridLayout rows="90, *, 90">
        <StackLayout row="0">
            <Label text="TNN Movie" class="header"></Label>
        </StackLayout>

        <!-- Component Dynamic -->
        <StackLayout row="1">
          <component :is="tab" />
        </StackLayout>

        <!-- Component Dynamic -->
        <!--<FlexboxLayout class="bottom-menu" row="2">
          <StackLayout class="h-bottom-box" @tap="home()" orientation="vertical">
            <Label text.decode="&#xf09e;" class="fas h-bottom-btn" />
            <Label text="Feed" class="h-bottom-txt" />
          </StackLayout>
          <StackLayout class="h-bottom-box" @tap="search()" orientation="vertical">
            <Label text.decode="&#xf012;" class="fas h-bottom-btn" />
            <Label text="Progress" class="h-bottom-txt" />
          </StackLayout>
          <StackLayout class="h-bottom-box" @tap="coupon()" orientation="vertical">
            <Label text.decode="&#xf290;" class="fas h-bottom-btn" />
            <Label text="Store" class="h-bottom-txt" />
          </StackLayout>
          <StackLayout @tap="profile()" class="h-bottom-box" orientation="vertical">
            <Label text.decode="&#xf03a;" class="fas h-bottom-btn" />
            <Label text="Menu" class="h-bottom-txt" />
          </StackLayout>
        </FlexboxLayout>-->
        <GridLayout row="2" rows="auto" columns="*, *, *, *">
            <Button :class="{ 'nav-btn': true, 'selected': selectedButton === 'home' }" text="🛖" @tap="home()" row="1" col="0"></Button>
            <Button :class="{ 'nav-btn': true, 'selected': selectedButton === 'search' }" text="🔍" @tap="search()" row="1" col="1"></Button>
            <Button :class="{ 'nav-btn': true, 'selected': selectedButton === 'coupon' }" text="🎫" @tap="coupon()" row="1" col="2"></Button>
            <Button :class="{ 'nav-btn': true, 'selected': selectedButton === 'profile' }" text="👤" @tap="profile()" row="1" col="3"></Button>
        </GridLayout>

      </GridLayout>
    </Page>
  </template>

  <script src="../js/nav.js"></script>

  <style src="../android.scss" lang="scss"></style>
