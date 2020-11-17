// Generated by https://quicktype.io

export interface RandomPhoto {
    id:                       string;
    created_at:               string;
    updated_at:               string;
    promoted_at:              string | null;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              string;
    alt_description:          string;
    urls:                     Urls;
    links:                    Links;
    categories:               any[];
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              boolean | null;
    user:                     User;
    exif:                     Exif;
    location:                 Location;
    views:                    number;
    downloads:                number;
}

export interface Exif {
    make:          string;
    model:         string;
    exposure_time: string;
    aperture:      string;
    focal_length:  string;
    iso:           number;
}

export interface Links {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Location {
    title:    string | null;
    name:     string | null;
    city:     string | null;
    country:  string | null;
    position: Position;
}

export interface Position {
    latitude:  number | null;
    longitude: number | null;
}

export interface Urls {
    raw:     string;
    full:    string;
    regular: string;
    small:   string;
    thumb:   string;
}

export interface User {
    id:                 string;
    updated_at:         string;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    twitter_username:   string;
    portfolio_url:      string;
    bio:                string;
    location:           string;
    links:              UserLinks;
    profile_image:      ProfileImage;
    instagram_username: string;
    total_collections:  number;
    total_likes:        number;
    total_photos:       number;
    accepted_tos:       boolean;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}
