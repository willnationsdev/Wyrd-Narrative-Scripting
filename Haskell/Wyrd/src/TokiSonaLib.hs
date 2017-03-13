module TokiSonaLib
    ( someFunc, last', last2, lastn, length'
    ) where

someFunc :: IO ()
someFunc = putStrLn ("someFunc" ++ " Hello")

--Problem 1
last' :: [a] -> a
last' = foldl1 (\_ x -> x )

--Problem 2
last2 :: [a] -> a
last2 xs = lastn xs 2

--Problem 3
lastn :: [a] -> Int -> a
lastn xs n = reverse xs !! (n-1)

--Problem 4
length' :: (Foldable t, Num b) => t1 -> t a -> b
length' _ = foldr (\ _ -> (+) 1) 0

--Problem 5


--Problem 6


--Problem 7


--Problem 8





