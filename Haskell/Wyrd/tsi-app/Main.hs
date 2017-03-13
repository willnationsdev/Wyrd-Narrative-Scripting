module Main where

import TokiSonaLib

main :: IO ()
main = do lst <- getLine
          print $ last' lst
          print $ last2 lst
          print $ lastn lst 3
          print $ length' lst